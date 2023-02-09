const express = require('express');
const {Router} = express;
const mongoose = require('mongoose');
const routerBalance = Router()
const balance = require('../models/balance.model.js')
const { client, URL } = require('../db/dbConfig.js')
mongoose.set("strictQuery", false);


client.connect(() => {

    routerBalance.get('/', (req, res) => {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        res.header("Access-Control-Allow-Origin", "*");
        // Traer todos los balances
        try {
            balance.find({}).then((r) => {
                res.status(200).send(r);
            });
        } catch (error) {
            res.status(400).send(error);
        }
    });

    routerBalance.post('/', (req, res) => {
        // crear balance
        const {name, descripcion, codigo, price, stock, porcentaje, mes} = req.body;
            const newBalance = new balance({
            name: name,
            descripcion: descripcion,
            codigo: codigo,
            price: price,
            stock: stock,
            porcentaje: porcentaje,
            mes: mes,
        });
        try {
            mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            newBalance.save().then((r) => {
                res.send('Balance creado')
            });
        } catch (error) {
            res.send(error)
        }
    });
});

module.exports = routerBalance;
