const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"] }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
