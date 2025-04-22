const Blog = require('../models/blogModel');

// Create Blog
exports.createBlog = async (req, res) => {
    try {
      const { title, description, author, category, image } = req.body;
  
      const newBlog = new Blog({
        title,
        description,
        author,
        category,
        image,
      });
  
      const savedBlog = await newBlog.save();
      res.status(201).json(savedBlog);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

// Get All Blogs
exports.getBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find().sort({ date: -1 });
      res.status(200).json(blogs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Get Single Blog
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Blog
exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Blog
exports.deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
