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
        /* ye personal gamil ke liye
         const transporter = nodemailer.createTransport({
             service: 'gmail', // Ya kisi aur SMTP server ka use karein
             auth: {
                 user: process.env.EMAIL_USER,
                 pass: process.env.EMAIL_PASS
             }
         }); */

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true, // SSL ke liye true rakhein (port 465 ke liye)
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false  // Ye allow karega self-signed SSL certificates
            }
        });


        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER, // Hostinger email jo send karega
            to: 'info@3tech.sa', // Jahan mail bhejni hai 
            subject: `New Contact Form Submission from ${name}`,
            replyTo: email, // User ka email, taki aap direct reply kar sakein
            html: `
                <h3>New Contact Form Submission (3tech)</h3>
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
        console.error("Error in createContact:", error);
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
};