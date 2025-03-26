// controllers/contactController
const Contact = require('../models/Contact.model');
const nodemailer = require('nodemailer');
require('dotenv').config();

exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        const newContact = new Contact({ name, email, phone, subject, message });
        //save to db
        await newContact.save();

        // Configure Nodemailer transporter (Replace with your credentials)
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Ya kisi aur SMTP server ka use karein
            /*  auth: {
                  user: 'your-email@gmail.com', // Apna email
                  pass: 'your-email-password' // Apna email password ya App Password (2FA enable ho to App Password generate karein)
              } */
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: 'ahsan6775676@gmail.com',
            to: 'ahsan200112@gmail.com', // Jahan mail bhejni hai
            subject: `New Contact Form Submission from ${name}`,
            replyTo: email, // User ka email, taki aap direct reply kar sakein
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: 'Contact form submitted and email sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};