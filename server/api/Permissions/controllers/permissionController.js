const Role = require('../../Roles/models/roleModel');
const Permission = require('../models/permissionModel');

// Get permissions for a role
exports.getRolePermissions = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id).populate('permissions');
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

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

    const actions = ['create', 'edit', 'view', 'delete'];

    res.status(200).json({
      rolePermissions: role.permissions,
      modules,
      actions
    });
  } catch (error) {
    console.error('Error fetching permissions:', error);
    res.status(500).json({ message: 'Server error while fetching permissions' });
  }
};

// Update permissions for a role
exports.updateRolePermissions = async (req, res) => {
  try {
    const { roleId, permissions } = req.body;

    const role = await Role.findById(roleId);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    const updatedPermissionIds = [];

    for (const perm of permissions) {
      const { module, actions } = perm;

      let permission = await Permission.findOne({ module, _id: { $in: role.permissions } });

      if (permission) {
        permission.actions = actions;
        await permission.save();
        updatedPermissionIds.push(permission._id);
      } else {
        const newPermission = new Permission({ module, actions });
        await newPermission.save();
        updatedPermissionIds.push(newPermission._id);
      }
    }

    role.permissions = updatedPermissionIds;
    await role.save();

    res.status(200).json({ message: 'Permissions updated successfully' });
  } catch (error) {
    console.error('Error updating permissions:', error);
    res.status(500).json({ message: 'Server error while updating permissions' });
  }
};
