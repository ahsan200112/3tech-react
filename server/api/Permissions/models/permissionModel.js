const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  roleName: {
    type: String,
    required: true
  },
  permissions: [
    {
      _id: false,
      module: {
        type: String,
        enum: [
          'Blogs',
          'Services',
          'ContactForm',
          'Faqs',
          'Testimonials',
          'Users',
          'Projects',
          'Roles'
        ],
        required: true
      },
      actions: {
        type: Map,
        of: Boolean,
        default: {
          create: false,
          edit: false,
          view: false,
          delete: false
        },
        // Disable _id field in actions
        _id: false,
      }
    }
  ]
});

module.exports = mongoose.model('Permission', permissionSchema);
module.exports.schema = permissionSchema;
