const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  module: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },
  actions: {
    type: [String], // ['create', 'read', 'update', 'delete']
    default: [],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Permission', permissionSchema);
 
