const Role = require('../../Roles/models/roleModel');
const Permission = require('../models/permissionModel')

exports.getRolePermissions = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id).populate('permissions');
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    const modules = [
      'Blogs', 'Services', 'ContactForm', 'Faqs', 'Testimonials',
      'Users', 'Projects', 'Roles'
    ];

    const actions = ['create', 'edit', 'view', 'delete'];

    const rolePermission = role.permissions; // already populated

    res.status(200).json({
      rolePermissions: rolePermission ? rolePermission.permissions : [],
      modules,
      actions
    });
  } catch (error) {
    console.error('Error fetching permissions:', error);
    res.status(500).json({ message: 'Server error while fetching permissions' });
  }
};

exports.updateRolePermissions = async (req, res) => {
  try {
    const { roleId, permissions } = req.body;

    const role = await Role.findById(roleId);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    let permissionDoc;
    if (role.permissions) {
      permissionDoc = await Permission.findById(role.permissions);
      if (permissionDoc) {
        permissionDoc.permissions = permissions;
        await permissionDoc.save();
      }
    }

    if (!permissionDoc) {
      // create new permission doc if not exist
      permissionDoc = new Permission({
        role: role._id,
        permissions
      });
      await permissionDoc.save();
      role.permissions = permissionDoc._id;
      await role.save();
    }

    res.status(200).json({ message: 'Permissions updated successfully' });
  } catch (error) {
    console.error('Error updating permissions:', error);
    res.status(500).json({ message: 'Server error while updating permissions' });
  }
};
