const express = require('express');
const config = require('./config.js');
const routerUser = require('./routes/login.router.js');
const routerBalance = require('./routes/balance.router.js');
const routerUTransacciones = require("./routes/ultimasTransacciones.router.js");
const routerTarjetas = require("./routes/tarjetas.router.js");
const routerMenu = require("./routes/menu.router.js");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api/login', routerUser);
app.use('/api/balance', routerBalance);
app.use('/api/ultimasTransacciones', routerUTransacciones);
app.use('/api/tarjetas', routerTarjetas);
app.use('/api/menu', routerMenu);

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
}   );
