const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  sales: [{ type: String }],
});

let product = mongoose.model("product", productSchema);

module.exports = product;
