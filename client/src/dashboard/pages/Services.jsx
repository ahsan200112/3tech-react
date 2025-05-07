import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { useTranslation } from 'react-i18next';
import { getServices, createService, updateService, deleteService } from '../../api/apiEndpoints';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const Services = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const [services, setServices] = useState([]);
    const [show, setShow] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [fullDescription, setFullDescription] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [serviceData, setServiceData] = useState({
        title: { en: '', ar: '' },
        image: null,
        description: { en: '', ar: '' },
        link: ''
    });

    const fetchServices = async () => {
        try {
            const res = await api.get(getServices);
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
        setServiceData({ title: { en: '', ar: '' }, image: '', description: { en: '', ar: '' }, link: '' });
    };

    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title[en]', serviceData.title.en);
        formData.append('title[ar]', serviceData.title.ar);
        formData.append('description[en]', serviceData.description.en);
        formData.append('description[ar]', serviceData.description.ar);
        formData.append('link', serviceData.link);
        formData.append('image', serviceData.image); // 👈 file append

        if (isEditing) {
            await api.put(updateService(serviceData._id), formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        } else {
            await api.post(createService, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        }
        handleClose();
        fetchServices();
    };

    const handleEdit = (service) => {
        setServiceData({
            title: { en: service.title.en, ar: service.title.ar },
            description: { en: service.description.en, ar: service.description.ar },
            link: service.link,
            image: service.image,
            _id: service._id
        });
        setIsEditing(true);
        handleShow();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            await api.delete(deleteService(id));
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
                        <th>Title (English)</th>
                        <th>Title (Arabic)</th>
                        <th>Description (English)</th>
                        <th>Description (Arabic)</th>
                        <th>Image</th>
                        <th>Link</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => (
                        <tr key={service._id}>
                            <td style={{ width: '150px' }}>{service.title.en}</td>
                            <td style={{ width: '150px' }}>{service.title.ar}</td>
                            <td style={{ width: '200', position: 'relative' }}>
                                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: service.description.en }}></div>
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
                            <td style={{ width: '200px', position: 'relative' }}>
                                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: service.description.ar }}></div>
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
                                <img src={service.image} alt={service.title[lang]} style={{ height: '60px', objectFit: 'cover' }} />
                            </td>
                            <td style={{ width: '50px' }}>{service.link}</td>
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
                            <Form.Label>Title (English)</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.title.en}
                                onChange={(e) => setServiceData({ ...serviceData, title: { ...serviceData.title, en: e.target.value } })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Title (Arabic)</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.title.ar}
                                onChange={(e) => setServiceData({ ...serviceData, title: { ...serviceData.title, ar: e.target.value } })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description (English)</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.description.en}
                                onChange={(e) => setServiceData({ ...serviceData, description: { ...serviceData.description, en: e.target.value } })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description (Arabic)</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.description.ar}
                                onChange={(e) => setServiceData({ ...serviceData, description: { ...serviceData.description, ar: e.target.value } })}
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
