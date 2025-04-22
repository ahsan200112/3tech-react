const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const upload = require('../../../utils/upload');
const { createBlog } = require('../controllers/blogController');

router.post('/blogs', blogController.createBlog);

// Create
router.post('/', blogController.createBlog);
// Read
router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlogById);

// Update
router.put('/:id', blogController.updateBlog);

// Delete
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
