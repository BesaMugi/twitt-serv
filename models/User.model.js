const mongoose = require("mongoose");

const UserSchema = mongoose.Schema ({
    user: String,
    saves: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Twitt"
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;