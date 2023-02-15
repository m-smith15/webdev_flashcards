const { Card } = require("../models/card.model");

module.exports.index = (request, response) => {
    response.json({
        message: "C'est vrai! C'est l'indice!"
    });
}
module.exports.createCard = (request, response) => {
const { cardTitle, cardDescription } = request.body;
    Card.create({
        cardTitle,
        cardDescription
    })
        .then(card => response.json(card))
        // Send validation errors w/ 400 status 
        .catch(err => response.status(400).json(err));
        // rather than 200 success default
}
module.exports.getAllCards = (request, response) => {
    Card.find({})
        .then(card => response.json(card))
        .catch(err => response.json(err))
}
module.exports.getCard = (request, response) => {
    Card.findOne({_id:request.params.id})
        .then(card => response.json(card))
        .catch(err => response.json(err))
}
module.exports.getRandomSet = (request, response) => {
    Card.aggregate([{ $sample: { size: 3 } }])
        .then(card => response.json(card))
        .catch(err => response.json(err))
}
module.exports.updateCard = (request, response) => {
// runValidators required for update validations
    Card.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedCard => response.json(updatedCard))
        .catch(err => response.status(400).json(err))
}
module.exports.deleteCard = (request, response) => {
    Card.deleteOne({_id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}