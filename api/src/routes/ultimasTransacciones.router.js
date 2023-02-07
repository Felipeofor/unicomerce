const express = require("express");
const {Router} = express;
const mongoose = require('mongoose');
const routerUTransacciones = Router();
const ultimasTransacciones = require('../models/ultimasTransacciones.model.js')
const { client, URL } = require('../db/dbConfig.js')
mongoose.set("strictQuery", false);

client.connect(() => {

    routerUTransacciones.get('/', (req, res) => {
        // Solo traer las ultimas 10 transacciones
        try {
            ultimasTransacciones.find({}).then((r) => {
                if (r.length > 10) {
                    res.send(r.sort((a, b) => b.fecha - a.fecha).slice(0, 10));
                } else {
                    res.send(r.sort((a, b) => b.fecha - a.fecha));
                }
            });
        } catch (error) {
            res.send(error);
        }
    });
    // Crea una transaccion
    routerUTransacciones.post('/', (req, res) => {
        try {
            const {name, descripcion, codigo, price, stock, porcentaje, fecha} = req.body;
            const newUltimasTransacciones = new ultimasTransacciones({
                name: name,
                descripcion: descripcion,
                codigo: codigo,
                price: price,
                stock: stock,
                porcentaje: porcentaje,
                fecha: fecha,
            });
            mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            newUltimasTransacciones.save().then((r) => {
                res.send('Transaccion creada')
            });
            }
            catch (error) {
                res.send(error)
            }
    });

});

module.exports = routerUTransacciones;
