import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import api from '../../api/api';
import { getSEOMetas, createSEOMeta, updateSEOMeta, deleteSEOMeta } from '../../api/apiEndpoints';
import usePermission from '../../hooks/usePermission';
import { useTranslation } from 'react-i18next';

const SeoMeta = () => {
    const { t } = useTranslation();
    const [seoMetas, setSeoMetas] = useState([]);
    const [show, setShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [seoData, setSeoData] = useState({
        page: '',
        title: '',
        description: ''
    });

    const { canCreate, canEdit, canDelete } = usePermission("SeoMeta");

    const fetchSEOMetas = async () => {
        try {
            const res = await api.get(getSEOMetas);
            setSeoMetas(res.data);
        } catch (error) {
            console.error('Error fetching SEO meta data:', error);
        }
    };

    useEffect(() => {
        fetchSEOMetas();
    }, []);

    const handleClose = () => {
        setShow(false);
        setIsEditing(false);
        setSeoData({ page: '', title: '', description: '' });
    };

    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await api.put(updateSEOMeta(seoData._id), seoData);
            } else {
                await api.post(createSEOMeta, seoData);
            }
            handleClose();
            fetchSEOMetas();
        } catch (err) {
            console.error("Error saving SEO meta:", err);
        }
    };

    const handleEdit = (meta) => {
        setSeoData(meta);
        setIsEditing(true);
        handleShow();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this SEO meta?')) {
            await api.delete(deleteSEOMeta(id));
            fetchSEOMetas();
        }
    };

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{t("SEO Meta Management")}</h2>
                {canCreate && (
                    <Button variant="primary" onClick={handleShow}>
                        {t("Add New SEO Meta")}
                    </Button>
                )}
            </div>
            <Table bordered hover responsive className="custom-table">
                <thead>
                    <tr>
                        <th>{t("Page Link")}</th>
                        <th>{t("Title")}</th>
                        <th>{t("Description")}</th>
                        <th>{t("Date")}</th>
                        <th>{t("Actions")}</th>
                    </tr>
                </thead>
                <tbody>
                    {seoMetas.map(meta => (
                        <tr key={meta._id}>
                            <td>{meta.page}</td>
                            <td>{meta.title}</td>
                            <td>{meta.description}</td>
                            <td>{new Date(meta.createdAt).toLocaleDateString()}</td>
                            <td>
                                {canEdit && (
                                    <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(meta)}>
                                        <FaEdit />
                                    </Button>
                                )}
                                {canDelete && (
                                    <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(meta._id)}>
                                        <FaTrash />
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal for Create/Edit SEO Meta */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? t('Edit SEO Meta') : t('Create SEO Meta')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Page Link")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={seoData.page}
                                onChange={(e) => setSeoData({ ...seoData, page: e.target.value })}
                                required
                            />
                            <Form.Text className="text-muted">
                                {t("Example")}: <code>/</code>,<code>/ecommercesolutions</code>, <code>/services</code>, <code>/mobileapplications</code>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t("Title")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={seoData.title}
                                onChange={(e) => setSeoData({ ...seoData, title: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t("Description")}</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={seoData.description}
                                onChange={(e) => setSeoData({ ...seoData, description: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Button type="submit" variant="success">
                            {isEditing ? t('Update') : t('Create')}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SeoMeta;
