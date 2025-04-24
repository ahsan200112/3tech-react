const Permission = require('../models/permissionModel');

// ➕ Create Permission
exports.createPermission = async (req, res) => {
  try {
    const { module, role, actions } = req.body;

    const existing = await Permission.findOne({ module, role });
    if (existing) return res.status(400).json({ message: 'Permission already exists for this role and module' });

    const permission = new Permission({ module, role, actions });
    await permission.save();

    res.status(201).json({ message: 'Permission created successfully', permission });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 🔁 Get All Permissions
exports.getPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find().populate('role', 'name');
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔍 Get Permission by ID
exports.getPermissionById = async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id).populate('role', 'name');
    if (!permission) return res.status(404).json({ message: 'Permission not found' });

    res.status(200).json(permission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✏️ Update Permission
exports.updatePermission = async (req, res) => {
  try {
    const { module, actions } = req.body;

    const permission = await Permission.findById(req.params.id);
    if (!permission) return res.status(404).json({ message: 'Permission not found' });

    permission.module = module || permission.module;
    permission.actions = actions || permission.actions;

    const updatedPermission = await permission.save();
    res.status(200).json({ message: 'Permission updated', permission: updatedPermission });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ❌ Delete Permission
exports.deletePermission = async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id);
    if (!permission) return res.status(404).json({ message: 'Permission not found' });

    await permission.remove();
    res.status(200).json({ message: 'Permission deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
