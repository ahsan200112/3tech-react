// In your backend (server.js)
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');
const path = require("path");

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

const ContactRoutes = require('./api/ContactForm/routes/ContactRoute')
app.use('/api/contact', ContactRoutes);

const BlogRoutes = require('./api/Blogs/routes/blogRoutes')
app.use('/api/blogs', BlogRoutes);

const ServiceRoutes = require('./api/Services/routes/serviceRoutes')
app.use('/api/services', ServiceRoutes);

const ProjectRoutes = require('./api/Projects/routes/projectRoutes')
app.use('/api/projects', ProjectRoutes);

const PackagesPricingRoutes = require('./api/PackagesPricing/routes/packagesPricingRoutes')
app.use('/api/packagesPricing', PackagesPricingRoutes);

const FAQRoutes = require('./api/Faq/routes/faqRoutes')
app.use('/api/faqs', FAQRoutes);

const TestimonialRoutes = require('./api/Testimonial/routes/testimonialRoutes')
app.use('/api/testimonials', TestimonialRoutes);

const UserRoutes = require('./api/Users/routes/userRoutes')
app.use('/api/users', UserRoutes);

const RoleRoutes = require('./api/Roles/routes/roleRoutes')
app.use('/api/roles', RoleRoutes);

const PermissionRoutes = require('./api/Permissions/routes/permissionRoutes')
app.use('/api/permissions', PermissionRoutes);

const AuthRoutes = require('./api/Auth/routes/authRoutes')
app.use('/api/auth', AuthRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Server Error",
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
