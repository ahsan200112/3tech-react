const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionController');
const checkAccess = require('../../../middleware/checkAccess');

// Get permissions for a role
router.get('/:id', checkAccess('Roles', 'view'), permissionController.getRolePermissions);

// Update permissions for a role
router.put('/', checkAccess('Roles', 'edit'), permissionController.updateRolePermissions);

module.exports = router;
