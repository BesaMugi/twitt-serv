const mongoose = require("mongoose");

const TwittSchema = mongoose.Schema({
    twitt: String,
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    like: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }]
});

const Twitt = mongoose.model("Twitt", TwittSchema);

module.exports = Twitt;