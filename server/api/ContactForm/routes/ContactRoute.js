// routes/contactRoutes
const express = require('express');
const contactController = require('../controllers/ContactController');
const router = express.Router();
const checkAccess = require('../../../middleware/checkAccess');

router.post('/', contactController.createContact);
router.get('/', checkAccess('ContactForm', 'view'), contactController.getContacts);

module.exports = router;