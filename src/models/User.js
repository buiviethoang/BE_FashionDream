const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
    {
        _id: {type: Number, require: true},
        username: {type: String, required: true, unique: true},
        password: {type: String, require: true},
        email: {type: String, required: true, unique: true},
        isAdmin: {type: Boolean, default: false},

    },
    {timestamps: true}
);
module.exports = mongoose.model("User", UserSchema);