const express = require('express');
const roleController = require('../controllers/roleController');
const router = express.Router();
const checkAccess = require('../../../middleware/checkAccess');

// Create role
router.post('/', checkAccess('Roles', 'create'), roleController.createRole);

// Get all roles
router.get('/', checkAccess('Roles', 'view'), roleController.getRoles);

// Get role by ID
router.get('/:id', checkAccess('Roles', 'view'), roleController.getRoleById);

// Delete role
router.delete('/:id', checkAccess('Roles', 'delete'), roleController.deleteRole);
router.put('/:id', checkAccess('Roles', 'edit'), roleController.updateRole);            // Update role name

module.exports = router;
