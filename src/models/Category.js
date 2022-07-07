const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    listProduct: {type: Array, require: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", CategorySchema);
