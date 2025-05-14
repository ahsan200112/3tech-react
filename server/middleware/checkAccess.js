const jwt = require('jsonwebtoken');

const checkAccess = (moduleName, action) => {
  return async (req, res, next) => {
    try {
      // 1. Get token from header
      const authHeader = req.header('Authorization');
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
      }

      const token = authHeader.replace('Bearer ', '');

      // 2. Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 3. Attach user to request
      req.user = decoded;
      //console.log('Decoded User:', req.user);

      const userPermissions = decoded.permissions;

      if (!userPermissions || !Array.isArray(userPermissions)) {
        return res.status(403).json({ message: 'Access denied: No permissions found' });
      }

      // 4. Check permission for module/action
      const modulePermission = userPermissions.find(p => p.module === moduleName);

      if (!modulePermission || !modulePermission.actions?.[action]) {
        return res.status(403).json({
          message: `Access denied: You do not have "${action}" access on "${moduleName}"`
        });
      }

      next(); // ✅ All good, proceed
    } catch (error) {
      console.error('Access Middleware Error:', error);
      return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }
  };
};

module.exports = checkAccess;
