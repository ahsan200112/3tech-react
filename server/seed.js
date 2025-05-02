const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
const User = require('./api/Users/models/userModel');
const Role = require('./api/Roles/models/roleModel');
const Permission = require('./api/Permissions/models/permissionModel');

// List of permission modules
const permissions = [
  'Blogs',
  'Services',
  'ContactForm',
  'Faqs',
  'Testimonials',
  'Users',
  'Projects',
  'Roles',
  'Settings',
];

// Create Admin role with all permissions
const createAdminRole = async () => {
  const adminPermissions = [];

  for (const module of permissions) {
    let permission = await Permission.findOne({ module });

    if (!permission) {
      permission = new Permission({
        module,
        actions: {
          create: true,
          edit: true,
          view: true,
          delete: true,
        },
      });
      await permission.save();
      console.log(`✅ Permission for ${module} created.`);
    }

    adminPermissions.push(permission._id);
  }

  const existingRole = await Role.findOne({ name: 'Super Admin' });
  if (existingRole) {
    console.log('ℹ️ Super Admin role already exists');
    return existingRole;
  }

  const role = new Role({
    name: 'Super Admin',
    permissions: adminPermissions,
  });

  await role.save();
  console.log('✅ Super Admin role created');
  return role;
};

// Create Admin user
const createAdminUser = async (role) => {
  const existingUser = await User.findOne({ email: 'admin@admin.com' });
  if (existingUser) {
    console.log('ℹ️ Super Admin user already exists');
    return;
  }

  const user = new User({
    firstName: 'Admin',
    lastName: 'User',
    userName: 'adminuser',
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
    const role = await createAdminRole();
    await createAdminUser(role);
    console.log('🌱 Seeding completed!');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
