const mongoose = require('mongoose');

const ultimasTransacciones = mongoose.model('ultimasTransacciones', {
    name: String,
    descripcion: String,
    codigo: String,
    price: Number,
    stock: Number,
    porcentaje: Number,
    fecha: Date,
});

module.exports = ultimasTransacciones;
