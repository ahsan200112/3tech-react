const cloudinary = require('cloudinary').v2;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware to upload image to Cloudinary
const cloudinaryUpload = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  cloudinary.uploader.upload(req.file.path, { folder: 'blogs' }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
    }

    // Add the image URL to the request object
    req.imageUrl = result.secure_url;
    next();
  });
};

module.exports = cloudinaryUpload;
