const express = require('express');
const {Router} = express;
const mongoose = require('mongoose');
const routerTarjetas = Router();
const tarjetas = require('../models/tarjeta.model');
const {client, URL} = require("../db/dbConfig");
mongoose.set("strictQuery", false);

client.connect(() => {

    routerTarjetas.get('/',(req, res) => {
        try {
            tarjetas.find({}).then((r) => {
                res.send(r);
            });
        } catch (error) {
            res.send(error);
        }
    });

    routerTarjetas.post('/', (req, res) => {
        const {name, dateExp, number, cvv} = req.body;
        const newTarjeta = new tarjetas({
            name: name,
            dateExp: dateExp,
            number: number,
            cvv: cvv,
        });
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            newTarjeta.save().then((r) => {
                res.send('Tarjeta creada');
            });
        } catch (error) {
            res.send(error);
        }
    });

});

module.exports = routerTarjetas;
