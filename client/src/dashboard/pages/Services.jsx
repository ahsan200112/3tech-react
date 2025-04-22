import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const Services = () => {
    const [services, setServices] = useState([]);
    const [show, setShow] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [fullDescription, setFullDescription] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [serviceData, setServiceData] = useState({
        title: '',
        image: null,
        description: '',
        link: ''
    });

    const fetchServices = async () => {
        try {
            const res = await api.get('/api/services');
            console.log('Fetched services:', res.data); // 👈 Add this
            setServices(res.data);
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleClose = () => {
        setShow(false);
        setIsEditing(false);
        setServiceData({ title: '', image: '', description: '', link: '' });
    };

    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', serviceData.title);
        formData.append('description', serviceData.description);
        formData.append('link', serviceData.category);
        formData.append('image', serviceData.image); // 👈 file append

        if (isEditing) {
            await api.put(`/api/services/${serviceData._id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        } else {
            await api.post('/api/services', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        }
        handleClose();
        fetchServices();
    };

    const handleEdit = (service) => {
        setServiceData(service);
        setIsEditing(true);
        handleShow();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            await api.delete(`/api/services/${id}`);
            fetchServices();
        }
    };

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Service Management</h2>
                <Button variant="primary" onClick={handleShow}>Add New Service</Button>
            </div>
            <Table bordered hover responsive className="custom-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Link</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => (
                        <tr key={service._id}>
                            <td style={{ width: '200px' }}>{service.title}</td>
                            <td style={{ width: '400px', position: 'relative' }}>
                                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: service.description }}></div>
                                <FaEye
                                    style={{
                                        position: 'absolute',
                                        bottom: '50px',
                                        right: '4px',
                                        cursor: 'pointer',
                                        color: '#0d6efd'
                                    }}
                                    onClick={() => {
                                        setFullDescription(service.description);
                                        setShowDescription(true);
                                    }}
                                    title="View full description"
                                />
                            </td>
                            <td>
                                <img src={service.image} alt={service.title} style={{ height: '60px', objectFit: 'cover' }} />
                            </td>
                            <td style={{ width: '100px' }}>{service.link}</td>
                            <td>{new Date(service.date).toLocaleDateString()}</td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(service)}><FaEdit /></Button>
                                <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(service._id)}><FaTrash /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* View Full Description Modal */}
            <Modal show={showDescription} onHide={() => setShowDescription(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Full Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div dangerouslySetInnerHTML={{ __html: fullDescription }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDescription(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

            {/* Create/Edit Service Modal */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Service' : 'Create Service'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.title}
                                onChange={(e) => setServiceData({ ...serviceData, title: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.description}
                                onChange={(e) => setServiceData({ ...serviceData, description: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.link}
                                onChange={(e) => setServiceData({ ...serviceData, link: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='mx-2'>Upload Image (60 * 60 recommended webp format)</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={(e) => setServiceData({ ...serviceData, image: e.target.files[0] })}
                            />
                        </Form.Group>

                        <Button type="submit" variant="success">{isEditing ? 'Update' : 'Create'}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Services;
