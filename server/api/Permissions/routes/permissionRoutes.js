const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionController');

// Get permissions for a role
router.get('/:id', permissionController.getRolePermissions);

// Update permissions for a role
router.put('/', permissionController.updateRolePermissions);

module.exports = router;
