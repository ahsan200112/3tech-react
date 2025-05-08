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
export const getFAQCategories = '/api/faqs/categories';
export const getFAQByCategory = (category) => `/api/faqs/category/${category}`;

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
export const updatePassword = () => `/api/users/updatepassword`;

// Current User (Logged-in User)
export const getCurrentUser = '/api/users/me'; // Get current logged-in user details
export const updateCurrentUser = () => '/api/users/me'; // Update the current user (self update)

//auth
export const login = '/api/auth/login';
export const getProfile = '/api/auth/userprofile';
export const updateProfile = '/api/auth/update';

// Roles
export const getRoles = '/api/roles';
export const createRole = '/api/roles';
export const getRoleById = (id) => `/api/roles/${id}`;
export const updateRole = (id) => `/api/roles/${id}`;
export const deleteRole = (id) => `/api/roles/${id}`;

// Permissions
export const getRolePermissions = (roleId) => `/api/permissions/${roleId}`;
export const updatePermissions = '/api/permissions';
