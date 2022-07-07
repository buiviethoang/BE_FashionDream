const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    discountPercent: { type: Number, required: true },
    storeQuantity: { type: Number, required: true },
    noComment: { type: Number, required: true },
    starCount: { type: Number, required: true },
    image: { type: String },
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category",
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", ProductSchema);
