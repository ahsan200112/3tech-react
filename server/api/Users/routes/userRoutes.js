const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../../Auth/middlewares/authMiddleware');

router.put('/updatepassword', authMiddleware, userController.updatePassword);
router.get('/me', authMiddleware, userController.getCurrentUser);
router.put('/me', authMiddleware, userController.updateCurrentUser);

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', authMiddleware, userController.getUserById);
router.put('/:id', authMiddleware, userController.updateUserByAdmin);
router.delete('/:id', userController.deleteUser);

module.exports = router;
