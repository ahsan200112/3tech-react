const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    ar: { type: String, required: true }
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    en: { type: String, required: true },
    ar: { type: String, required: true }
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    en: { type: String, required: true },
    ar: { type: String, required: true }
  },
  category: {
    en: { type: String, required: true },
    ar: { type: String, required: true }
  },
});

module.exports = mongoose.model('Blog', blogSchema);
