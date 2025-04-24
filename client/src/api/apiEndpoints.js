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
export const getFAQ = '/api/faqs';
export const createFAQ = '/api/faqs';
export const updateFAQ = (id) => `/api/faqs/${id}`;
export const deleteFAQ = (id) => `/api/faqs/${id}`;

//testimonial
export const getTestimonials = '/api/testimonials';
export const createTestimonial = '/api/testimonials';
export const updateTestimonial = (id) => `/api/testimonials/${id}`;
export const deleteTestimonial = (id) => `/api/testimonials/${id}`;

//users
export const getUsers = '/api/users';
export const createUser = '/api/users';
export const updateUser = (id) => `/api/users/${id}`;
export const deleteUser = (id) => `/api/users/${id}`;

//roles
export const getRoles = '/api/roles';
export const createRole = '/api/roles';
export const updateRole = (id) => `/api/roles/${id}`;
export const deleteRole = (id) => `/api/roles/${id}`;

//permissions
export const getPermissions = '/api/permissions';
export const createPermission = '/api/permissions';
export const updatePermission = (id) => `/api/permissions/${id}`;
export const deletePermission = (id) => `/api/permissions/${id}`;