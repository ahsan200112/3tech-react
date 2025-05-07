const Role = require('../models/roleModel');
const Permission = require('../../Permissions/models/permissionModel');

// Create a new role with default permissions
exports.createRole = async (req, res) => {
  try {
    const { name } = req.body;

    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({ message: 'Role already exists' });
    }

    // Step 1: Create default permissions for this role
    const modules = [
      'Blogs',
      'Services',
      'ContactForm',
      'Faqs',
      'Testimonials',
      'Users',
      'Projects',
      'Roles',
      'Settings'
    ];

    const permissionsArray = modules.map((mod) => ({
      module: mod,
      actions: {
        create: false,
        edit: false,
        view: false,
        delete: false
      }
    }));

    const newRole = new Role({ name });
    await newRole.save();

    const permissionObject = new Permission({
      role: newRole._id,
      roleName: name,
      permissions: permissionsArray
    });
    await permissionObject.save();

    newRole.permissions = permissionObject._id;
    await newRole.save();
    res.status(201).json({ role: newRole, permissions: permissionObject });
  } catch (err) {
    console.error('Error creating role:', err);
    res.status(500).json({ message: err.message });
  }
};

// Get all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find().populate('permissions');
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get role by ID
exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id).populate('permissions');
    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.status(200).json(role);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a role and its permissions
exports.deleteRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) return res.status(404).json({ message: 'Role not found' });

    // Remove all permissions linked to the role
    await Permission.deleteMany({ _id: { $in: role.permissions } });

    res.status(200).json({ message: 'Role and its permissions deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update the name of a role
exports.updateRole = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if the role exists
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    // Check if the new role name already exists
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({ message: 'Role name already exists' });
    }

    // Update the role name
    role.name = name;
    await role.save();

    res.status(200).json(role);
  } catch (err) {
    console.error('Error updating role:', err);
    res.status(500).json({ message: err.message });
  }
};
