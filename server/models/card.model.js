const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema({
    cardTitle: {
        type: String,
        required: [true,"A Title is required"],
        minLength: [2,"Title must be at least 2 characters long"],
        maxLength: [35,"Title can be no longer than 35 characters"]
    },
    cardDescription: {
        type: String,
        required: [true,"A Description is required"],
        minLength: [2,"Description must be at least 2 characters"],
        maxLength: [1000,"Description cannot exceed 1000 characters"]
    }
}, { timestamps: true } );
//setup the schema w/ mongoose, also set some basic validations
module.exports.Card = mongoose.model('Card', CardSchema);
//dont forget to export