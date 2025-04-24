const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');

// ✅ Create User
exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, userName, email, password, role, phoneNo } = req.body;

        const userExists = await User.findOne({ $or: [{ email }, { userName }] });
        if (userExists) return res.status(400).json({ message: 'Email or Username already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            firstName,
            lastName,
            userName,
            phoneNo,
            email,
            password: hashedPassword,
            role
        });

        await user.save();

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 🔁 Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('role').select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 🔍 Get Single User by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('role').select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✏️ Update User
exports.updateUser = async (req, res) => {
    try {
        const { firstName, lastName, userName, email, password, role, phoneNo } = req.body;

        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.phoneNo = phoneNo || user.phoneNo;
        user.userName = userName || user.userName;
        user.email = email || user.email;
        user.role = role || user.role;

        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        const updatedUser = await user.save();
        res.status(200).json({ message: 'User updated', user: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ❌ Delete User
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await user.remove();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

