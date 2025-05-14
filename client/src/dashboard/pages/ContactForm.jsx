import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import api from '../../api/api';
import { getContactForms } from '../../api/apiEndpoints';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();
    const [contactForm, setContactForm] = useState([]);

    const fetchContactForm = async () => {
        try {
            const res = await api.get(getContactForms);
           // console.log('Fetched contactform:', res.data);
            setContactForm(res.data);
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    useEffect(() => {
        fetchContactForm();
    }, []);


    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{t("Contact Form Submissions")}</h2>
            </div>
            <Table bordered hover responsive className="custom-table">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>{t("Name")}</th>
                        <th>{t("Email")}</th>
                        <th>{t("Phone")}</th>
                        <th>{t("Subject")}</th>
                        <th>{t("Message")}</th>
                        <th>{t("Submitted At")}</th>
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
                            <td colSpan="7" className="text-center">{t("No contacts found")}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default Services;
