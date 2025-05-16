import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import api from '../../api/api';
import { getContactForms } from '../../api/apiEndpoints';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    const [contactForm, setContactForm] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchContactForm = async () => {
        try {
            setLoading(true);
            const res = await api.get(getContactForms);
            // console.log('Fetched contactform:', res.data);
            setContactForm(res.data);
        } catch (error) {
            console.error('ERROR', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContactForm();
    }, []);

    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
            render: (_, __, index) => index + 1,
        },
        {
            title: t('Name'),
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: t('Email'),
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: t('Phone'),
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: t('Subject'),
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: t('Message'),
            dataIndex: 'message',
            key: 'message',
        },
        {
            title: t('Submitted At'),
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (date) => new Date(date).toLocaleString(),
        },
    ];

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{t("Contact Form Submissions")}</h2>
            </div>
            <div className="ant-table-wrapper custom-ant-table">
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={contactForm}
                    rowKey="_id"
                    bordered
                    pagination={false}
                    locale={{ emptyText: t("No contacts found") }}
                />
            </div>
        </div>
    );
};

export default ContactForm;
