const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const upload = require('../../../middleware/upload');
const cloudinary = require('../../../middleware/cloudinary');
const checkAccess = require('../../../middleware/checkAccess');

// Create
router.post('/', upload.single('image'), cloudinary, checkAccess('Projects', 'create'), projectController.createProject);
// Read
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectById);

// Update
router.put('/:id', upload.single('image'), cloudinary, checkAccess('Projects', 'edit'), projectController.updateProject);

// Delete
router.delete('/:id', checkAccess('Projects', 'delete'), projectController.deleteProject);

module.exports = router;
