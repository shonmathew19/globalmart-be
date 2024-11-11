//three modules needed: cors,express,dotenv
//nodemon: to automatically detect changes an run again

require('dotenv').config()

const express = require('express');
require('./DB/connection.js')

const routes = require('./Routes/router.js')
const userRoutes = require('./Routes/userRoutes.js')
const cors = require('cors');
const cartServer = express();

cartServer.use(cors());
cartServer.use(express.json());
cartServer.use(routes);
cartServer.use(userRoutes);

const PORT = 3000;

cartServer.listen(PORT,()=>{
    console.log('Cart server running successfully in PORT: ',PORT)
})

cartServer.get('/',(req,res)=>{
    res.send(
        '<h2>Cart server running</h2>'
    )
})