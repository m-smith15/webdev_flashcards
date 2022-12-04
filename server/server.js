const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require('dotenv').config()
//requiring the techs - express, cors
require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true } ) );
require('./routes/card.routes')(app);
app.listen(port, () => console.log(`Spinning up on port: ${port}`) );
