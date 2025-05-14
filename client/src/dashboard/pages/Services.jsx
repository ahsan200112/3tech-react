import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { useTranslation } from 'react-i18next';
import { getServices, createService, updateService, deleteService } from '../../api/apiEndpoints';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import usePermission from '../../hooks/usePermission';

const Services = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const [services, setServices] = useState([]);
    const [show, setShow] = useState(false);
    const [showFullModal, setShowFullModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [serviceData, setServiceData] = useState({
        title: { en: '', ar: '' },
        image: null,
        description: { en: '', ar: '' },
        link: ''
    });

    const { canCreate, canEdit, canDelete } = usePermission("Services");

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
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{t("Service Management")}</h2>
                {canCreate && (
                    <Button variant="primary" onClick={handleShow}>{t("Add New Service")}</Button>
                )}
            </div>
            <Table bordered hover responsive className="custom-table">
                <thead>
                    <tr>
                        <th>{t("Title (English)")}</th>
                        <th>{t("Title (Arabic)")}</th>
                        {/*  <th>Description (English)</th>
                        <th>Description (Arabic)</th> */}
                        <th>{t("Image")}</th>
                        <th>{t("Link")}</th>
                        {/*    <th>Date</th> */}
                        <th>{t("Actions")}</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => (
                        <tr key={service._id}>
                            <td>{service.title.en}</td>
                            <td>{service.title.ar}</td>
                            {/* <td>
                                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: service.description.en }}></div>
                            </td>
                            <td>
                                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: service.description.ar }}></div>
                            </td> */}
                            <td className="table-image-cell">
                                <img src={service.image} alt={service.title[lang]} style={{ height: '60px', objectFit: 'cover' }} />
                            </td>
                            <td>{service.link}</td>
                            {/* <td>{new Date(service.date).toLocaleDateString()}</td> */}
                            <td style={{width:"150px"}}>
                                <Button variant="outline-success" size="sm" className="mx-1 my-1"
                                    onClick={() => {
                                        setServiceData(service);
                                        setShowFullModal(true);
                                    }}>
                                    <FaEye />
                                </Button>
                                {canEdit && (
                                    <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(service)}><FaEdit /></Button>
                                )}
                                {canDelete && (
                                    <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(service._id)}><FaTrash /></Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Full view modal for service details */}
            <Modal
                show={showFullModal}
                onHide={() => setShowFullModal(false)}
                size="lg"
                centered
                scrollable
            >
                <Modal.Header closeButton>
                    <Modal.Title>🛠️ {t("Service Details")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <strong>📝 {t("Title (English)")}:</strong> {serviceData?.title?.en}
                        </div>
                        <div className="col-md-6 mb-2">
                            <strong>📝 {t("Title (Arabic)")}:</strong> {serviceData?.title?.ar}
                        </div>

                        <div className="col-md-6 mb-2">
                            <strong>🔗 {t("Link")}:</strong> {serviceData?.link}
                        </div>
                    </div>

                    <hr />

                    <div className="mb-3">
                        <strong>📝 {t("Description (English)")}:</strong>
                        <div
                            className="border rounded p-2 mt-1"
                            style={{ backgroundColor: "#f9f9f9" }}
                            dangerouslySetInnerHTML={{ __html: serviceData?.description?.en }}
                        />
                    </div>

                    <div className="mb-3">
                        <strong>📝 {t("Description (Arabic)")}:</strong>
                        <div
                            className="border rounded p-2 mt-1"
                            style={{ backgroundColor: "#f9f9f9" }}
                            dangerouslySetInnerHTML={{ __html: serviceData?.description?.ar }}
                        />
                    </div>

                    {serviceData.image && (
                        <div>
                            <strong>🖼️ {t("Service Image")}:</strong>
                            <div className="mt-2">
                                <img
                                    src={serviceData.image}
                                    alt="Service"
                                />
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowFullModal(false)}>
                        {t("Close")}
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Create/Edit Service Modal */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? t('Edit Service') : t('Create Service')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Title (English)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.title.en}
                                onChange={(e) => setServiceData({ ...serviceData, title: { ...serviceData.title, en: e.target.value } })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t("Title (Arabic)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.title.ar}
                                onChange={(e) => setServiceData({ ...serviceData, title: { ...serviceData.title, ar: e.target.value } })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t("Description (English)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.description.en}
                                onChange={(e) => setServiceData({ ...serviceData, description: { ...serviceData.description, en: e.target.value } })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t("Description (Arabic)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.description.ar}
                                onChange={(e) => setServiceData({ ...serviceData, description: { ...serviceData.description, ar: e.target.value } })}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>{t("Link")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={serviceData.link}
                                onChange={(e) => setServiceData({ ...serviceData, link: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='mx-2'>{t("Upload Image (60 * 60 recommended webp format)")}</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={(e) => setServiceData({ ...serviceData, image: e.target.files[0] })}
                            />
                        </Form.Group>

                        <Button type="submit" variant="success">{isEditing ? t('Update') : t('Create')}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Services;
