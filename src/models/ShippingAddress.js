const mongoose = require('mongoose');
const ShipAddrSchema = mongoose.Schema({
    customerName: {type: String, required: true},
    address: {type: String, required: true},
    zipcode: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    isDefault: {type: Boolean, required: true},
},
    {timestamps: true}
);

module.exports = mongoose.model("ShippingAddress", ShipAddrSchema);