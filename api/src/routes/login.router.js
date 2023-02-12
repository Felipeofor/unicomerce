const express = require("express");
const {Router} = express;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {client, URL} = require("../db/dbConfig");
const Logins = require("../models/login.model.js");
const routerUser = Router();
mongoose.set("strictQuery", false);

client.connect(() => {
    const usuarios = client.db("test").collection("logins");

    routerUser.post("/", async (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        usuarios.findOne().then((r) => {
            try {
                if (r.nroDocumento === req.body.nroDocumento && r.clave === req.body.clave) {
                    res.status(200).send("Usuario logueado");
                } else {
                    res.status(200).send("Usuario o clave incorrectos");
                }
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    });

    routerUser.post("/register", (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            try {
                console.log(req.body, "req.body")
                const {tipoDocumento, nroDocumento, clave} = req.body;
                usuarios.findOne({nroDocumento: nroDocumento}).then((r) => {
                    if (r) {
                        res.send("Usuario ya existe");
                    } else {
                        if (clave === "" || clave === null || clave === undefined) {
                            res.send("La clave no puede ser vacía");
                        } else {
                            bcrypt.hash(clave, 10).then((hash) => {
                                const newLogin = new Logins({
                                    tipoDocumento: tipoDocumento,
                                    nroDocumento: nroDocumento,
                                    clave: clave,
                                });
                                newLogin.save().then((r) => {
                                    res.send("Usuario registrado correctamente");
                                });
                            });
                        }
                    }
                });
            } catch (error) {
                res.send(error);
            }
        }
    );

});

module.exports = routerUser;
