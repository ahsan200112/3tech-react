import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../api/api';
import { getContactForms } from '../../api/apiEndpoints';

const Services = () => {
    const [contactForm, setContactForm] = useState([]);

    const fetchContactForm = async () => {
        try {
            const res = await api.get(getContactForms);
            console.log('Fetched contactform:', res.data);
            setContactForm(res.data);
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    useEffect(() => {
        fetchContactForm();
    }, []);


    return (
        <div className="container py-5">
            <h2>Contact Form Submissions</h2>
            <div className="table-responsive-wrapper">
                <Table bordered hover responsive className="custom-table">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Submitted At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactForm.length > 0 ? (
                            contactForm.map((contact, index) => (
                                <tr key={contact._id}>
                                    <td>{index + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.subject}</td>
                                    <td>{contact.message}</td>
                                    <td>{new Date(contact.createdAt).toLocaleString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">No contacts found</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Services;
