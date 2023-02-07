const mongoose = require("mongoose");

const menu = mongoose.model("menu", {
    name: String,
    title: String,
    icon: String,
    link: String,
    submenu: Array,
});

module.exports = menu;
