const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  message: {
    en: { type: String, required: true },
    ar: { type: String, required: true }
  },
  name: {
    en: { type: String, required: true },
    ar: { type: String, required: true }
  },
  position: {
    en: { type: String, required: true },
    ar: { type: String, required: true }
  }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);

