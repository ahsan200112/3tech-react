const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../../Auth/middlewares/authMiddleware');
const checkAccess = require('../../../middleware/checkAccess');

router.put('/updatepassword', authMiddleware, userController.updatePassword);
router.get('/me', authMiddleware, userController.getCurrentUser);
router.put('/me', authMiddleware, userController.updateCurrentUser);

router.post('/',checkAccess('Users', 'create'), userController.createUser);
router.get('/',checkAccess('Users', 'view'), userController.getUsers);
router.get('/:id', authMiddleware, userController.getUserById);
router.put('/:id', authMiddleware,checkAccess('Users', 'edit'), userController.updateUserByAdmin);
router.delete('/:id',checkAccess('Users', 'delete'), userController.deleteUser);

module.exports = router;
