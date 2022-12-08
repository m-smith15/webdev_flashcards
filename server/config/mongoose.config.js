require('dotenv').config();
const mongoose = require('mongoose');
// Conditionally render the db connection:
//if the env var MONGODB_URI is provided, then use it
//otherwise, localhost
const uri = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/webdev_flashcardsdb';
mongoose.connect(uri)
        .then(() => console.log("Connected with the DB!"))
        .catch(err => console.log("Got an error connecting to DB", err));