import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../../api/apiEndpoints';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [show, setShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [testimonialData, setTestimonialData] = useState({
        text: '',
        name: '',
        position: '',
    });

    const fetchTestimonial = async () => {
        try {
            const res = await api.get(getTestimonials);
            console.log('Fetched testimonials:', res.data); // 👈 Add this
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
        setTestimonialData({ text: '', name: '', position: '', });
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
        setTestimonialData(testimonial);
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
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Testimonial Management</h2>
                <Button variant="primary" onClick={handleShow}>Add New Testimonial</Button>
            </div>
            <Table bordered hover responsive className="custom-table">
                <thead>
                    <tr>
                        <th>Text</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {testimonials.map(testimonial => (
                        <tr key={testimonial._id}>
                            <td style={{ width: "500px" }}>{testimonial.text}</td>
                            <td style={{ width: "150px" }}>{testimonial.name}</td>
                            <td style={{ width: "150px" }}>{testimonial.position}</td>
                            {/*<td>{new Date(faq.date).toLocaleDateString()}</td>*/}
                            <td>{new Date(testimonial.createdAt).toLocaleDateString()}</td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(testimonial)}><FaEdit /></Button>
                                <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(testimonial._id)}><FaTrash /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Create/Edit Faq Modal */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Testimonial' : 'Create Testimonial'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Text</Form.Label>
                            <Form.Control
                                as="textarea" rows={4}
                                type="text"
                                value={testimonialData.text}
                                onChange={(e) => setTestimonialData({ ...testimonialData, text: e.target.value })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={testimonialData.name}
                                onChange={(e) => setTestimonialData({ ...testimonialData, name: e.target.value })}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Position</Form.Label>
                            <Form.Control
                                type="text"
                                value={testimonialData.position}
                                onChange={(e) => setTestimonialData({ ...testimonialData, position: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Button type="submit" variant="success">{isEditing ? 'Update' : 'Create'}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Testimonial;
