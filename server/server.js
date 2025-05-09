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

const SeoMetaRoutes = require('./api/SeoMeta/routes/seoMetaRoutes');
app.use('/api/seo-meta', SeoMetaRoutes);

const fs = require("fs");
const SeoMeta = require('./api/SeoMeta/models/seoMetaModel');
app.get('*', async (req, res) => {
  const indexPath = path.join(__dirname, 'client/build', 'index.html');
  fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
    if (err) return res.status(500).send("Error loading index.html");

    const foundMeta = await SeoMeta.findOne({ path: req.path });
    const title = foundMeta?.title || "3tech | اطلق متجرك مع منصة ثري تك";
    const description = foundMeta?.description || "!اهلا بك في عالم التجارة الالكترونية مع منصة ثري تك، اطلق متجرك الالكتروني";

    const updatedHtml = htmlData
      .replace(/<title>(.*?)<\/title>/, `<title>${title}</title>`)
      .replace(
        /<meta name="description" content="(.*?)" \/>/,
        `<meta name="description" content="${description}" />`
      );

    res.send(updatedHtml);
  });
});


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
