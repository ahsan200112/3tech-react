import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { getFAQ, createFAQ, updateFAQ, deleteFAQ } from '../../api/apiEndpoints';
import { FaEdit, FaTrash } from 'react-icons/fa';

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);
    const [show, setShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [faqData, setFaqData] = useState({
        question: '',
        answer: '',
    });

    const fetchFaq = async () => {
        try {
            const res = await api.get(getFAQ);
            console.log('Fetched faqs:', res.data); // 👈 Add this
            setFaqs(res.data);
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    useEffect(() => {
        fetchFaq();
    }, []);

    const handleClose = () => {
        setShow(false);
        setIsEditing(false);
        setFaqData({ question: '', answer: '', });
    };

    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (isEditing) {
            await api.put(updateFAQ(faqData._id), faqData);
        } else {
            await api.post(createFAQ, faqData);
        }
        handleClose();
        fetchFaq();
    };

    const handleEdit = (faq) => {
        setFaqData(faq);
        setIsEditing(true);
        handleShow();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this faq?')) {
            await api.delete(deleteFAQ(id));
            fetchFaq();
        }
    };

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>FAQ Management</h2>
                <Button variant="primary" onClick={handleShow}>Add New FAQ</Button>
            </div>
            <Table bordered hover responsive className="custom-table">
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {faqs.map(faq => (
                        <tr key={faq._id}>
                            <td style={{width:"330px"}}>{faq.question}</td>
                            <td style={{width:"470px"}}>{faq.answer}</td>
                            {/*<td>{new Date(faq.date).toLocaleDateString()}</td>*/}
                            <td>{new Date(faq.createdAt).toLocaleDateString()}</td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(faq)}><FaEdit /></Button>
                                <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(faq._id)}><FaTrash /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Create/Edit Faq Modal */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit FAQ' : 'Create FAQ'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                type="text"
                                value={faqData.question}
                                onChange={(e) => setFaqData({ ...faqData, question: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Answer</Form.Label>
                            <Form.Control
                                as="textarea" rows={4}
                                type="text"
                                value={faqData.answer}
                                onChange={(e) => setFaqData({ ...faqData, answer: e.target.value })}
                            />
                        </Form.Group>

                        <Button type="submit" variant="success">{isEditing ? 'Update' : 'Create'}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default FAQ;
