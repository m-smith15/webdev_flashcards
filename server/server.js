const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require('dotenv').config()
//requiring the techs - express, cors
require('./config/mongoose.config');
app.use(express.json());
app.use(express.urlencoded({ extended: true } ) );

// IF THE CLIENT URL IS FOUND IN ENV VARIABLES
process.env.CLIENT_URL 
// THEN CORS SETTINGS FOR PRODUCTION ENVIRONMENT
? app.use(cors({
    origin: process.env.CLIENT_URL,
    preflightContinue: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
})) 
// ELSE, IN DEV ENVIRONMENT, NO CORS SETTINGS NECESSARY
: app.use(cors());
require('./routes/card.routes')(app);
app.listen(port, () => console.log(`Spinning up dev environment on port: ${port}`) );

