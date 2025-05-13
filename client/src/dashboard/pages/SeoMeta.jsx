import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import api from '../../api/api';
import { getSEOMetas, createSEOMeta, updateSEOMeta, deleteSEOMeta } from '../../api/apiEndpoints';
import usePermission from '../../hooks/usePermission';

const SeoMeta = () => {
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
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>SEO Meta Management</h2>
                {canCreate && (
                    <Button variant="primary" onClick={handleShow}>
                        Add New SEO Meta
                    </Button>
                )}
            </div>
            <div className="table-responsive-wrapper">
                <Table bordered hover responsive className="custom-table">
                    <thead>
                        <tr>
                            <th>Page Link</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Actions</th>
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
            </div>

            {/* Modal for Create/Edit SEO Meta */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit SEO Meta' : 'Create SEO Meta'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Page Link</Form.Label>
                            <Form.Control
                                type="text"
                                value={seoData.page}
                                onChange={(e) => setSeoData({ ...seoData, page: e.target.value })}
                                required
                            />
                            <Form.Text className="text-muted">
                                Example: <code>/</code>,<code>/ecommercesolutions</code>, <code>/services</code>, <code>/mobileapplications</code>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={seoData.title}
                                onChange={(e) => setSeoData({ ...seoData, title: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={seoData.description}
                                onChange={(e) => setSeoData({ ...seoData, description: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Button type="submit" variant="success">
                            {isEditing ? 'Update' : 'Create'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SeoMeta;
