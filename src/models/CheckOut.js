const mongoose = require('mongoose');
const CheckOutSchema = mongoose.Schema({
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "ShippingAddress"
    },
    paymentCard: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "PaymentCard"
    }, 
    delivery: {
        type: Number, 
        required: true,
    }
},
    {timestamps: true}
);

module.exports = mongoose.model("CheckOut", CheckOutSchema);