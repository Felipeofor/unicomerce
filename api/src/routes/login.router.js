const express = require("express");
const {Router} = express;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { client, URL } = require("../db/dbConfig");
const Logins = require("../models/login.model.js");
const routerUser = Router();
mongoose.set("strictQuery", false);

client.connect(() => {
    const usuarios = client.db("test").collection("logins");

    routerUser.post("/", (req, res) => {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            const {tipoDocumento, nroDocumento, clave} = req.body;
            // Usuario ya existe
            usuarios.findOne({nroDocumento: nroDocumento}).then((r) => {
                // Usuario existe
                if (r) {
                        if (r.clave === clave && r.tipoDocumento === tipoDocumento) {
                            res.status(200).send("Usuario existente");
                        } else {
                            res.status(200).send("Usuario o contraseña incorrectos");
                        }
                }
                // Usuario no existe
                else {
                    res.status(200).send("Usuario no existe");
                }
            });
        }
        catch (error) {
            res.status(400).send(error);
        }
    });

    routerUser.post("/register", (req, res) => {
        try {
            const {tipoDocumento, nroDocumento, clave} = req.body;
            usuarios.findOne({nroDocumento: nroDocumento}).then((r) => {
                if (r) {
                    res.send("Usuario ya existe");
                } else {
                    bcrypt.hash(clave, 10).then((hash) => {
                        mongoose.connect(URL, {
                                useNewUrlParser: true,
                                useUnifiedTopology: true,
                            }
                        );
                        const newLogin = new Logins({
                            tipoDocumento: tipoDocumento,
                            nroDocumento: nroDocumento,
                            clave: clave,
                        });
                        newLogin.save().then((r) => {
                            res.send("Usuario creado");
                        });
                    });
                }
            });
        }
        catch (error) {
            res.send(error);
        }
    }
    );

});

module.exports = routerUser;
