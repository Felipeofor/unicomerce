const mongoose = require("mongoose");

const balance = mongoose.model("balance", {
    name: String,
    descripcion: String,
    codigo: String,
    price: Number,
    stock: Number,
    porcentaje: Number,
});

module.exports = balance;
