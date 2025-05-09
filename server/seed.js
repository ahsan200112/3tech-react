const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
const User = require('./api/Users/models/userModel');
const Role = require('./api/Roles/models/roleModel');
const Permission = require('./api/Permissions/models/permissionModel');

// List of permission modules
const modules = [
  'Blogs',
  'Services',
  'ContactForm',
  'Faqs',
  'Testimonials',
  'Users',
  'Projects',
  'Roles',
  'SeoMeta'
];

// Create Super Admin role (just name)
const createSuperAdminRole = async () => {
  let role = await Role.findOne({ name: 'Super Admin' });
  if (role) {
    console.log('ℹ️ Super Admin role already exists');
    return role;
  }

  role = new Role({ name: 'Super Admin' });
  await role.save();
  console.log('✅ Super Admin role created');
  return role;
};

// Create permissions and return the permission document
const createPermissionsForRole = async (roleId) => {
  const existingPermission = await Permission.findOne({ role: roleId });
  if (existingPermission) {
    console.log('ℹ️ Permissions already exist for this role');
    return existingPermission;
  }

  const permissions = modules.map((module) => ({
    module,
    actions: {
      create: true,
      edit: true,
      view: true,
      delete: true,
    },
  }));

  const permissionDoc = new Permission({
    role: roleId,
    roleName: 'Super Admin',
    permissions,
  });

  await permissionDoc.save();
  console.log('✅ Permissions created for Super Admin role');
  return permissionDoc;
};

// Create Admin user
const createSuperAdminUser = async (role) => {
  const existingUser = await User.findOne({ email: 'admin@admin.com' });
  if (existingUser) {
    console.log('ℹ️ Super Admin user already exists');
    return;
  }

  const user = new User({
    firstName: 'Admin',
    lastName: 'User',
    phoneNo: 1234567890,
    email: 'admin@admin.com',
    password: 'adminpassword', // Plaintext (bcrypt removed)
    role: role._id,
  });

  await user.save();
  console.log('✅Super Admin user created');
};

// Seed function
const seedData = async () => {
  await connectDB();

  try {
    const role = await createSuperAdminRole();
    const permissionDoc = await createPermissionsForRole(role);

    if (!role.permissions || role.permissions.toString() !== permissionDoc._id.toString()) {
      role.permissions = permissionDoc._id;
      await role.save();
      console.log('✅ Linked permission to Super Admin role');
    }

    await createSuperAdminUser(role);
    console.log('🌱 Seeding completed!');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
