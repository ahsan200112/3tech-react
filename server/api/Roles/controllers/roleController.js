const Role = require('../models/roleModel');

// ✅ Create Role
exports.createRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;

    const roleExists = await Role.findOne({ name });
    if (roleExists) return res.status(400).json({ message: 'Role already exists' });

    const role = new Role({ name, permissions });
    await role.save();

    res.status(201).json({ message: 'Role created successfully', role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 🔁 Get All Roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔍 Get Role by ID
exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✏️ Update Role
exports.updateRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;

    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: 'Role not found' });

    role.name = name || role.name;
    role.permissions = permissions || role.permissions;

    const updatedRole = await role.save();
    res.status(200).json({ message: 'Role updated successfully', role: updatedRole });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ❌ Delete Role
exports.deleteRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: 'Role not found' });

    await role.remove();
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
