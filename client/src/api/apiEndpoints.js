//Contact Form
export const getContactForms = '/api/contact';
export const createContactForm = '/api/contact';

// Blogs
export const getBlogs = '/api/blogs';
export const createBlog = '/api/blogs';
export const updateBlog = (id) => `/api/blogs/${id}`;
export const deleteBlog = (id) => `/api/blogs/${id}`;

// Services
export const getServices = '/api/services';
export const createService = '/api/services';
export const updateService = (id) => `/api/services/${id}`;
export const deleteService = (id) => `/api/services/${id}`;

// projects
export const getProjects = '/api/projects';
export const createProject = '/api/projects';
export const updateProject = (id) => `/api/projects/${id}`;
export const deleteProject = (id) => `/api/projects/${id}`;

// Packages Pricing
export const getPackagesPricing = '/api/packagesPricing';
export const createPackagesPricing = '/api/packagesPricing';
export const updatePackagesPricing = (id) => `/api/packagesPricing/${id}`;
export const deletePackagesPricing = (id) => `/api/packagesPricing/${id}`;

//faq
export const getFAQ = '/api/faq';
export const createFAQ = '/api/faq';
export const updateFAQ = (id) => `/api/faq/${id}`;
export const deleteFAQ = (id) => `/api/faq/${id}`;

//testimonial
export const getTestimonials = '/api/testimonial';
export const createTestimonial = '/api/testimonial';
export const updateTestimonial = (id) => `/api/testimonial/${id}`;
export const deleteTestimonial = (id) => `/api/testimonial/${id}`;