const mongoose = require('mongoose');
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
//requiring the techs - express, cors, 
// require('./server/config/mongoose.config');


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(port, () => console.log(`Spinning up on port: ${port}`) );
})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true } ) ); 
require('./server/routes/card.routes')(app);
    
