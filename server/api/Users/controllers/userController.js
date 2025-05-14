const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');

// ✅ Create User
exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role, phoneNo } = req.body;

        const userExists = await User.findOne({ $or: [{ email }] });
        if (userExists) return res.status(400).json({ message: 'Email or Username already exists' });

        const user = new User({
            firstName,
            lastName,
            phoneNo,
            email,
            password: password,
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
        const userId = req.params.id === 'me'
            ? (req.user?._id || null)
            : req.params.id;

        if (req.params.id === 'me' && !req.user) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        const user = await User.findById(userId).populate('role', 'name').select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ✅ Current Logged-In User
exports.getCurrentUser = async (req, res) => {
    try {
        // Request object me stored user ki details ko fetch karna (from authMiddleware)
        const user = await User.findById(req.user._id)
        .populate({
            path: 'role',
            populate: {
                path: 'permissions', // This assumes `role.permissions` is an array of Permission ObjectIds
            },
        }) // ✅ Populate only the name field from role
        .select('-password');

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user); // User ki details ko response me bhejna
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCurrentUser = async (req, res) => {
    try {
        const user = req.user; // ✅ Ensure this is not undefined

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { firstName, lastName, email, password, phoneNo } = req.body;

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email;
        user.phoneNo = phoneNo || user.phoneNo;

        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        const updatedUser = await user.save();

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✏️ Update User (Admin)
exports.updateUserByAdmin = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role, phoneNo } = req.body;

        const user = await User.findById(req.params.id).populate('role');
        if (!user) return res.status(404).json({ message: 'User not found' });
        //console.log("user",req.user.role?.name);
        // Check if the logged-in user is a Super Admin
        /* 
        if (req.user.role?.name !== 'Super Admin') {
            return res.status(403).json({ message: 'Access denied. Admins only' });
        } */

        // Update fields
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email;
        user.phoneNo = phoneNo || user.phoneNo;
        user.role = role || user.role;

        // Handle password update
        if (password && password.trim() !== "") {
            user.password = password;
        }

        const updatedUser = await user.save();

        // Re-fetch the updated user with role populated and password excluded
        const refreshedUser = await User.findById(updatedUser._id)
            .populate('role', 'name')
            .select('-password');

        res.status(200).json({ message: 'User updated successfully by admin', user: refreshedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// ❌ Delete User
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Old password is incorrect' });

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
};
