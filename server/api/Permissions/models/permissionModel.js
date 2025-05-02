const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
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
      'Roles',  
      'Settings'
    ], 
    required: true 
  },
  actions: {
    create: { type: Boolean, default: false , required: true  },
    edit: { type: Boolean, default: false , required: true  },
    view: { type: Boolean, default: false , required: true  },
    delete: { type: Boolean, default: false , required: true  },
  }
});

module.exports = mongoose.model('Permission', permissionSchema);
