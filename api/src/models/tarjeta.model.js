const mongoose = require("mongoose");

const tarjeta = mongoose.model("tarjeta", {
    name: String,
    dateExp: String,
    number: String,
    cvv: String,
});

module.exports = tarjeta;
