require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("Connected with the DB!"))
        .catch(err => console.log("Got an error connecting to DB", err))

// mongoose.connect("mongodb://localhost/webdev_flashcardsdb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("Connected with the DB!"))
//     .catch(err => console.log("Got an error connecting to DB", err));

//creating if not present, and logging connection to mongodb
// leaving the local structure in for now - moving this to .env file