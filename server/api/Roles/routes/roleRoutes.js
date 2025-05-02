const express = require('express');
const roleController = require('../controllers/roleController');
const router = express.Router();

// Create role
router.post('/', roleController.createRole);

// Get all roles
router.get('/', roleController.getRoles);

// Get role by ID
router.get('/:id', roleController.getRoleById);

// Delete role
router.delete('/:id', roleController.deleteRole);
router.put('/:id', roleController.updateRole);            // Update role name

module.exports = router;
