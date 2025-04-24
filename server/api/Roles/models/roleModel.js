const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: {
    type: [String], // You can later define permission strings here
    default: [],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Role', roleSchema);

