const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question: {
    en: { type: String, required: true },
    ar: { type: String, required: true }
  },
  answer: {
    en: { type: String, required: true },
    ar: { type: String, required: true }
  },
  category: {
    type: String,
    enum: [
      "ecommerce solutions",
      "mobile applications",
      "marketing solutions",
      "creative design",
      "digital optimization"
    ],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("FAQ", faqSchema);
