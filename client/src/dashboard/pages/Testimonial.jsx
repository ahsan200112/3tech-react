import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../../api/apiEndpoints';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import usePermission from '../../hooks/usePermission';
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
    const { t } = useTranslation();
    const [testimonials, setTestimonials] = useState([]);
    const [show, setShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showFullModal, setShowFullModal] = useState(false);
    const [testimonialData, setTestimonialData] = useState({
        message: { en: '', ar: '' },
        name: { en: '', ar: '' },
        position: { en: '', ar: '' },
    });

    const { canCreate, canEdit, canDelete } = usePermission("Testimonials");

    const fetchTestimonial = async () => {
        try {
            const res = await api.get(getTestimonials);
            setTestimonials(res.data);
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    useEffect(() => {
        fetchTestimonial();
    }, []);

    const handleClose = () => {
        setShow(false);
        setIsEditing(false);
        setTestimonialData({
            message: { en: '', ar: '' },
            name: { en: '', ar: '' },
            position: { en: '', ar: '' },
        });
    };

    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (isEditing) {
            await api.put(updateTestimonial(testimonialData._id), testimonialData);
        } else {
            await api.post(createTestimonial, testimonialData);
        }
        handleClose();
        fetchTestimonial();
    };

    const handleEdit = (testimonial) => {
        setTestimonialData({
            message: { en: testimonial.message.en, ar: testimonial.message.ar },
            name: { en: testimonial.name.en, ar: testimonial.name.ar },
            position: { en: testimonial.position.en, ar: testimonial.position.ar },
        });
        setIsEditing(true);
        handleShow();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this testimonial?')) {
            await api.delete(deleteTestimonial(id));
            fetchTestimonial();
        }
    };

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{t("Testimonial Management")}</h2>
                {canCreate && (
                    <Button variant="primary" onClick={handleShow}>{t("Add New Testimonial")}</Button>
                )}
            </div>
            <Table bordered hover responsive className="custom-table">
                <thead>
                    <tr>
                        {/*  <th>Message (English)</th>
                        <th>Message (Arabic)</th> 
                        <th>Name (English)</th> */}
                        <th>{t("Name (Arabic)")}</th>
                        {/*  <th>Position (English)</th> */}
                        <th>{t("Position (Arabic)")}</th>
                        {/*   <th>Date</th> */}
                        <th>{t("Actions")}</th>
                    </tr>
                </thead>
                <tbody>
                    {testimonials.map(testimonial => (
                        <tr key={testimonial._id}>
                            {/* <td>{testimonial.message.en}</td>
                            <td>{testimonial.message.ar}</td>
                            <td>{testimonial.name.en}</td> */}
                            <td>{testimonial.name.ar}</td>
                            {/*   <td>{testimonial.position.en}</td>  */}
                            <td>{testimonial.position.ar}</td>
                            {/*<td>{new Date(faq.date).toLocaleDateString()}</td>*/}
                            {/*  <td>{new Date(testimonial.createdAt).toLocaleDateString()}</td> */}
                            <td style={{ width: "150px" }}>
                                <Button variant="outline-success" size="sm" className="mx-1 my-1"
                                    onClick={() => {
                                        setTestimonialData(testimonial);
                                        setShowFullModal(true);
                                    }}>
                                    <FaEye />
                                </Button>
                                {canEdit && (
                                    <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(testimonial)}><FaEdit /></Button>
                                )}
                                {canDelete && (
                                    <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(testimonial._id)}><FaTrash /></Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Full view modal for testimonial details */}
            <Modal
                show={showFullModal}
                onHide={() => setShowFullModal(false)}
                size="lg"
                centered
                scrollable
            >
                <Modal.Header closeButton>
                    <Modal.Title>🗣️ {t("Testimonial Details")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <strong>👤 {t("Name (English)")}:</strong> {testimonialData?.name?.en}
                        </div>
                        <div className="col-md-6 mb-2">
                            <strong>👤 {t("Name (Arabic)")}:</strong> {testimonialData?.name?.ar}
                        </div>

                        <div className="col-md-6 mb-2">
                            <strong>💼 {t("Position (English)")}:</strong> {testimonialData?.position?.en}
                        </div>
                        <div className="col-md-6 mb-2">
                            <strong>💼 {t("Position (Arabic)")}:</strong> {testimonialData?.position?.ar}
                        </div>
                    </div>

                    <hr />

                    <div className="mb-3">
                        <strong>📝 {t("Message (English)")}:</strong>
                        <div
                            className="border rounded p-2 mt-1"
                            style={{ backgroundColor: "#f9f9f9" }}
                        >
                            {testimonialData?.message?.en}
                        </div>
                    </div>

                    <div className="mb-3">
                        <strong>📝 {t("Message (Arabic)")}:</strong>
                        <div
                            className="border rounded p-2 mt-1"
                            style={{ backgroundColor: "#f9f9f9" }}
                        >
                            {testimonialData?.message?.ar}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowFullModal(false)}>
                        {t("Close")}
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* Create/Edit Faq Modal */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? t('Edit Testimonial') : t('Create Testimonial')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Message (English)")}</Form.Label>
                            <Form.Control
                                as="textarea" rows={4}
                                type="text"
                                value={testimonialData.message.en}
                                onChange={(e) => setTestimonialData({ ...testimonialData, message: { ...testimonialData.message, en: e.target.value } })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Message (Arabic)")}</Form.Label>
                            <Form.Control
                                as="textarea" rows={4}
                                type="text"
                                value={testimonialData.message.ar}
                                onChange={(e) => setTestimonialData({ ...testimonialData, message: { ...testimonialData.message, ar: e.target.value } })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Name (English)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={testimonialData.name.en}
                                onChange={(e) => setTestimonialData({ ...testimonialData, name: { ...testimonialData.name, en: e.target.value } })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Name (Arabic)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={testimonialData.name.ar}
                                onChange={(e) => setTestimonialData({ ...testimonialData, name: { ...testimonialData.name, ar: e.target.value } })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Position (English)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={testimonialData.position.en}
                                onChange={(e) => setTestimonialData({ ...testimonialData, position: { ...testimonialData.position, en: e.target.value } })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Position (Arabic)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={testimonialData.position.ar}
                                onChange={(e) => setTestimonialData({ ...testimonialData, position: { ...testimonialData.position, ar: e.target.value } })}
                                required
                            />
                        </Form.Group>

                        <Button type="submit" variant="success">{isEditing ? t('Update') : t('Create')}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Testimonial;
