const Blog = require('../models/blogModel');

// Create Blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description, author, category } = req.body;
    const imageUrl = req.imageUrl || '';

    const newBlog = new Blog({
      title: {
        en: title.en,
        ar: title.ar,
      },
      description: {
        en: description.en,
        ar: description.ar,
      },
      author: {
        en: author.en,
        ar: author.ar,
      },
      category: {
        en: category.en,
        ar: category.ar,
      },
      image: imageUrl || '',
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
    // Check if the image URL is provided and include it in the update
    const updatedData = { ...req.body };
    if (req.imageUrl) {
      updatedData.image = req.imageUrl;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updatedData, { new: true });
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
