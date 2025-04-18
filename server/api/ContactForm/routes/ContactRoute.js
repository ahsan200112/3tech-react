// routes/contactRoutes
const express = require('express');
const { createContact } = require('../controllers/ContactController');
const router = express.Router();

router.post('/', createContact);

module.exports = router;