require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require("cors");
const mongoInfo = process.env.DB_KEY;


mongoose.connect(mongoInfo);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());

app.use('/api', routes)

const corsOptions ={
    origin:'http://localhost:8080', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})