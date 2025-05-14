const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

const upload = require('../../../middleware/upload');
const cloudinary = require('../../../middleware/cloudinary');
const checkAccess = require('../../../middleware/checkAccess');

// Create Blog
router.post(
    '/',
    upload.single('image'),
    cloudinary,
    checkAccess('Blogs', 'create'),
    blogController.createBlog
);

// Update Blog
router.put(
    '/:id',
    upload.single('image'),
    cloudinary,
    checkAccess('Blogs', 'edit'),
    blogController.updateBlog
);

// Create
//router.post('/', blogController.createBlog);
// Read
router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlogById);

// Update
//router.put('/:id', blogController.updateBlog);

// Delete
router.delete('/:id', checkAccess('Blogs', 'delete'), blogController.deleteBlog);

module.exports = router;
