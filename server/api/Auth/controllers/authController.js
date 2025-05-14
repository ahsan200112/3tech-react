const User = require('../../Users/models/userModel');
const jwt = require('jsonwebtoken');

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }

    const user = await User.findOne({ email }).populate({
            path: 'role',
            populate: {
                path: 'permissions', // This assumes `role.permissions` is an array of Permission ObjectIds
            },
        });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials (user not found)' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials (password mismatch)' });
    }

    const rawPermissions = user.role?.permissions?.permissions || [];

    const formattedPermissions = rawPermissions.map(p => ({
      module: p.module,
      actions: p.actions
    }));

    const token = jwt.sign(
      { userId: user._id, role: user.role?.name, permissions: formattedPermissions },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};
