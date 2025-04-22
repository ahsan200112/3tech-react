const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const upload = require('../../../middleware/upload');
const cloudinary = require('../../../middleware/cloudinary');

// Create
router.post('/', upload.single('image'), cloudinary, projectController.createProject);
// Read
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectById);

// Update
router.put('/:id', upload.single('image'), cloudinary, projectController.updateProject);

// Delete
router.delete('/:id', projectController.deleteProject);

module.exports = router;
