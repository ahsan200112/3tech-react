import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { getFAQ, createFAQ, updateFAQ, deleteFAQ, getFAQCategories } from '../../api/apiEndpoints';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import usePermission from '../../hooks/usePermission';

const FAQ = () => {
    const { i18n } = useTranslation();
    const RTL = i18n.dir() === "rtl";
    const [filteredFaqs, setFilteredFaqs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [faqs, setFaqs] = useState([]);
    const [show, setShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showFullModal, setShowFullModal] = useState(false);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [faqData, setFaqData] = useState({
        question: { en: '', ar: '' },
        answer: { en: '', ar: '' },
        category: ''
    });

    const { canCreate, canEdit, canDelete } = usePermission("Faqs");

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
          //  console.log('Fetched faqs:', res.data); // 👈 Add this
            setFaqs(res.data);
            setFilteredFaqs(res.data);
        } catch (error) {
            console.error('ERROR', error);
        }
    };

//console.log("category:", categoryOptions);

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

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredFaqs(faqs);
        } else {
            const filtered = faqs.filter(faq => faq.category === category);
            setFilteredFaqs(filtered);
        }
    };

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>FAQ Management</h2>
                {canCreate && (
                    <Button variant="primary" onClick={handleShow}>Add New FAQ</Button>
                )}
            </div>

            {/* Category Filter Buttons */}
            <div className="mb-3">
                <Button
                    variant={selectedCategory === 'All' ? 'primary' : 'outline-primary'}
                    className={`${RTL ? 'ms-2' : 'me-2'} mb-2`}
                    onClick={() => handleCategoryFilter('All')}
                >
                    All
                </Button>
                {categoryOptions.map((cat, idx) => (
                    <Button
                        key={idx}
                        variant={selectedCategory === cat ? 'primary' : 'outline-primary'}
                        className={`${RTL ? 'ms-2' : 'me-2'} mb-2`}
                        onClick={() => handleCategoryFilter(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </div>
            <Table bordered hover responsive className="custom-table">
                <thead>
                    <tr>
                        {/* <th>Question (English)</th>*/}
                        <th>Question ( Arabic)</th>
                        {/*  <th>Answer (English)</th> */}
                        <th>Answer (Arabic)</th>
                        {/*}  <th>Category</th>
                        <th>Date</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFaqs.map(faq => (
                        <tr key={faq._id}>
                            {/*  <td> {faq.question.en}</td> */}
                            <td> {faq.question.ar}</td>
                            {/*  <td> {faq.answer.en}</td> */}
                            <td> {faq.answer.ar}</td>
                            {/* <td>{faq.category}</td>
                            <td>{new Date(faq.createdAt).toLocaleDateString()}</td> */}
                            <td style={{ width: "150px" }}>
                                <Button variant="outline-success" size="sm" className="mx-1 my-1"
                                    onClick={() => {
                                        setFaqData(faq);
                                        setShowFullModal(true);
                                    }}>
                                    <FaEye />
                                </Button>
                                {canEdit && (
                                    <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(faq)}><FaEdit /></Button>
                                )}
                                {canDelete && (
                                    <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(faq._id)}><FaTrash /></Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Full view modal for FAQ details */}
            <Modal
                show={showFullModal}
                onHide={() => setShowFullModal(false)}
                size="lg"
                centered
                scrollable
            >
                <Modal.Header closeButton>
                    <Modal.Title>❓ FAQ Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <strong>📁 Category:</strong> {faqData?.category}
                        </div>
                    </div>
                    <div className="mb-3">
                        <strong>📝 Question (EN):</strong>
                        <div
                            className="border rounded p-2 mt-1"
                            style={{ backgroundColor: "#f9f9f9" }}
                            dangerouslySetInnerHTML={{ __html: faqData?.question?.en }}
                        />
                    </div>
                    <div className="mb-3">
                        <strong>📝 Question (AR):</strong>
                        <div
                            className="border rounded p-2 mt-1"
                            style={{ backgroundColor: "#f9f9f9" }}
                            dangerouslySetInnerHTML={{ __html: faqData?.question?.ar }}
                        />
                    </div>

                    <div className="mb-3">
                        <strong>📝 Answer (EN):</strong>
                        <div
                            className="border rounded p-2 mt-1"
                            style={{ backgroundColor: "#f9f9f9" }}
                            dangerouslySetInnerHTML={{ __html: faqData?.answer?.en }}
                        />
                    </div>

                    <div className="mb-3">
                        <strong>📝 Answer (AR):</strong>
                        <div
                            className="border rounded p-2 mt-1"
                            style={{ backgroundColor: "#f9f9f9" }}
                            dangerouslySetInnerHTML={{ __html: faqData?.answer?.ar }}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowFullModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


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
