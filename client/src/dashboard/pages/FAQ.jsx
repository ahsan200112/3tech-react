import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { getFAQ, createFAQ, updateFAQ, deleteFAQ, getFAQCategories } from '../../api/apiEndpoints';
import { FaEdit, FaTrash } from 'react-icons/fa';

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);
    const [show, setShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [faqData, setFaqData] = useState({
        question: { en: '', ar: '' },
        answer: { en: '', ar: '' },
        category: ''
    });

    const fetchCategories = async () => {
        try {
            const res = await api.get(getFAQCategories);
            setCategoryOptions(res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const fetchFaq = async () => {
        try {
            const res = await api.get(getFAQ);
            console.log('Fetched faqs:', res.data); // 👈 Add this
            setFaqs(res.data);
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    console.log("category:", categoryOptions);

    useEffect(() => {
        fetchFaq();
        fetchCategories();
    }, []);

    const handleClose = () => {
        setShow(false);
        setIsEditing(false);
        setFaqData({ question: { en: '', ar: '' }, answer: { en: '', ar: '' }, category: '' });
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
                        <th>Question (English)</th>
                        <th>Question ( Arabic)</th>
                        <th>Answer (English)</th>
                        <th>Answer (Arabic)</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {faqs.map(faq => (
                        <tr key={faq._id}>
                            <td style={{ width: "200px" }}> {faq.question.en}</td>
                            <td style={{ width: "200px" }}> {faq.question.ar}</td>
                            <td style={{ width: "200px" }}> {faq.answer.en}</td>
                            <td style={{ width: "200px" }}> {faq.answer.ar}</td>
                            <td>{faq.category}</td>
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
                            <Form.Label>Question (English)</Form.Label>
                            <Form.Control
                                type="text"
                                value={faqData.question.en}
                                onChange={(e) =>
                                    setFaqData({
                                        ...faqData,
                                        question: { ...faqData.question, en: e.target.value }
                                    })
                                }
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Question (Arabic)</Form.Label>
                            <Form.Control
                                type="text"
                                value={faqData.question.ar}
                                onChange={(e) =>
                                    setFaqData({
                                        ...faqData,
                                        question: { ...faqData.question, ar: e.target.value }
                                    })
                                }
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Answer (English)</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={faqData.answer.en}
                                onChange={(e) =>
                                    setFaqData({
                                        ...faqData,
                                        answer: { ...faqData.answer, en: e.target.value }
                                    })
                                }
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Answer (Arabic)</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={faqData.answer.ar}
                                onChange={(e) =>
                                    setFaqData({
                                        ...faqData,
                                        answer: { ...faqData.answer, ar: e.target.value }
                                    })
                                }
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                value={faqData.category}
                                onChange={(e) =>
                                    setFaqData({ ...faqData, category: e.target.value })
                                }
                                required
                            >
                                <option value="">Select Category</option>
                                {categoryOptions.map((cat, idx) => (
                                    <option key={idx} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit" variant="success">{isEditing ? 'Update' : 'Create'}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default FAQ;
