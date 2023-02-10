const express = require('express');
const {Router} = express;
const mongoose = require('mongoose');
const routerTarjetas = Router();
const tarjetas = require('../models/tarjeta.model');
const {client, URL} = require("../db/dbConfig");
mongoose.set("strictQuery", false);

client.connect(() => {

    routerTarjetas.get('/', (req, res) => {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            tarjetas.find({}).then(async (r) => {
                res.status(200).send(await r);
            });
        } catch (error) {
            res.status(400).send(error);
        }
    });

    routerTarjetas.post('/', (req, res) => {
        const {name, dateExp, number, cvv} = req.body;
        if (!name || !dateExp || !number || !cvv) {
            res.send('Faltan datos');
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
            newTarjeta.save().then((r) => {
                res.send('Tarjeta creada');
            });
        } else {
            res.send('Faltan datos');
        }
    });

});

module.exports = routerTarjetas;
