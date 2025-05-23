const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
2