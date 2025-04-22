const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const upload = require('../../../middleware/upload');
const cloudinary = require('../../../middleware/cloudinary');

// Create
router.post('/', upload.single('image'), cloudinary, serviceController.createService);
// Read
router.get('/', serviceController.getServices);
router.get('/:id', serviceController.getServiceById);

// Update
router.put('/:id', upload.single('image'), cloudinary, serviceController.updateService);

// Delete
router.delete('/:id', serviceController.deleteService);

module.exports = router;
