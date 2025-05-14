const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const upload = require('../../../middleware/upload');
const cloudinary = require('../../../middleware/cloudinary');
const checkAccess = require('../../../middleware/checkAccess');

// Create
router.post('/', upload.single('image'), cloudinary, checkAccess('Services', 'create'), serviceController.createService);
// Read
router.get('/', serviceController.getServices);
router.get('/:id', serviceController.getServiceById);

// Update
router.put('/:id', upload.single('image'), cloudinary, checkAccess('Services', 'edit'), serviceController.updateService);

// Delete
router.delete('/:id', checkAccess('Services', 'delete'), serviceController.deleteService);

module.exports = router;
