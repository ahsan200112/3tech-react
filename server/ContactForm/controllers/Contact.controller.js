// controllers/contactController
const Contact = require('../models/Contact.model');

exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        const newContact = new Contact({ name, email, phone, subject, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};