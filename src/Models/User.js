const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("user", UserSchema);
