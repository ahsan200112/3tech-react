const jwt = require('jsonwebtoken');
const User = require('../../Users/models/userModel'); // adjust the path if needed

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) return res.status(401).json({ message: 'Authentication required' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId).select('-password');

        if (!user) return res.status(404).json({ message: 'User not found' });

        req.user = user; // ✅ This line is essential
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
