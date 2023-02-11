const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema({
    cardTitle: {
        type: String,
        minLength: [2,"Title must be at least 2 characters long"],
        maxLength: [35,"Title can be no longer than 35 characters"]
    },
    cardDescription: {
        type: String,
        minLength: [10,"Description must be at least 10 characters"],
        maxLength: [1400,"Description cannot exceed 1400 characters"]
    }
}, { timestamps: true } );
//setup the schema w/ mongoose, also set some basic validations
module.exports.Card = mongoose.model('Card', CardSchema);
//dont forget to export