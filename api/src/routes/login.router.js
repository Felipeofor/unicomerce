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

    routerUser.get("/", (req, res) => {
        try {
            res.send("OK");
        }
        catch (error) {
            res.send(error);
        }
    });

    routerUser.post("/", (req, res) => {
        try {
            const {usuario, password} = req.body;
            // Usuario ya existe
            usuarios.findOne({usuario: usuario}).then((r) => {
                    if (r) {
                        // Comparar password
                        bcrypt.compare(password, r.password).then((r) => {
                            if (r) {
                                res.send("Usuario logeado");
                            } else {
                                res.send("Usuario o contraseña incorrectos");
                            }
                        });
                    } else {
                        res.send("Usuario o contraseña incorrectos");
                    }
                }
            );
        } catch (error) {
            res.send(error);
        }
    });

    routerUser.post("/register", (req, res) => {
        try {
            const {usuario, password} = req.body;
            usuarios.findOne({usuario: usuario}).then((r) => {
                if (r) {
                    res.send("Usuario ya existe");
                } else {
                    bcrypt.hash(password, 10).then((hash) => {
                        mongoose.connect(URL, {
                                useNewUrlParser: true,
                                useUnifiedTopology: true,
                            }
                        );
                        const newLogin = new Logins({
                            usuario: usuario,
                            password: password,
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
