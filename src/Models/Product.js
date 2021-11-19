const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  img_url: { type: String },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("product", ProductSchema);
