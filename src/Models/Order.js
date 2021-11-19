const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customerEmail: { type: String, required: true },
  productId: { type: mongoose.Types.ObjectId, required: true },
  customerCounty: { type: String, required: true },
  customerCity: { type: String, required: true },
  status: { type: String, enum: ["pending", "shipped"], default: "pending" },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("order", OrderSchema);
