// routes/contactRoutes
const express = require('express');
const contactController = require('../controllers/ContactController');
const router = express.Router();

router.post('/', contactController.createContact);
router.get('/', contactController.getContacts);

module.exports = router;