const mongoose = require('mongoose');
const PaymentCardSchema = mongoose.Schema({
    cardNumber: {type: String, required: true, unique: true},
    holderName: {type: String, required: true},
    exp: {type: String, required: true},
    cvv: {type: Number, required: true},
    isDefault: {type: Boolean, required: true},
},
    {timestamps: true}
);

module.exports = mongoose.model("PaymentCard", PaymentCardSchema);