// routes/contactRoutes
const express = require('express');
const { createContact } = require('../controllers/Contact.controller');
const router = express.Router();

router.post('/', createContact);

module.exports = router;