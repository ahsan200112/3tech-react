import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { getProjects, createProject, updateProject, deleteProject } from '../../api/apiEndpoints';
import { useTranslation } from 'react-i18next';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const Projects = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const [projects, setProjects] = useState([]);
    const [show, setShow] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [fullDescription, setFullDescription] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [projectData, setProjectData] = useState({
        title: { en: '', ar: '' },
        image: null,
        description: { en: '', ar: '' },
        link: ''
    });

    const fetchProjects = async () => {
        try {
            const res = await api.get(getProjects);
            console.log('Fetched projects:', res.data); // 👈 Add this
            setProjects(res.data);
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleClose = () => {
        setShow(false);
        setIsEditing(false);
        setProjectData({ title: { en: '', ar: '' }, image: '', description: { en: '', ar: '' }, link: '' });
    };

    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title[en]', projectData.title.en);
        formData.append('title[ar]', projectData.title.ar);
        formData.append('description[en]', projectData.description.en);
        formData.append('description[ar]', projectData.description.ar);
        formData.append('link', projectData.category);
        formData.append('image', projectData.image); // 👈 file append

        if (isEditing) {
            await api.put(updateProject(projectData._id), formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        } else {
            await api.post(createProject, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        }
        handleClose();
        fetchProjects();
    };

    const handleEdit = (project) => {
        setProjectData({
            title: { en: project.title.en, ar: project.title.ar },
            description: { en: project.description.en, ar: project.description.ar },
            link: project.link,
            image: project.image,
            _id: project._id
        });
        setIsEditing(true);
        handleShow();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            await api.delete(deleteProject(id));
            fetchProjects();
        }
    };

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Project Management</h2>
                <Button variant="primary" onClick={handleShow}>Add New Project</Button>
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
                    {projects.map(project => (
                        <tr key={project._id}>
                            <td style={{ width: '150px' }}>{project.title.en}</td>
                            <td style={{ width: '150px' }}>{project.title.ar}</td>
                            <td style={{ width: '200', position: 'relative' }}>
                                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: project.description.en }}></div>
                                <FaEye
                                    style={{
                                        position: 'absolute',
                                        bottom: '50px',
                                        right: '4px',
                                        cursor: 'pointer',
                                        color: '#0d6efd'
                                    }}
                                    onClick={() => {
                                        setFullDescription(project.description);
                                        setShowDescription(true);
                                    }}
                                    title="View full description"
                                />
                            </td>
                            <td style={{ width: '200px', position: 'relative' }}>
                                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: project.description.ar }}></div>
                                <FaEye
                                    style={{
                                        position: 'absolute',
                                        bottom: '50px',
                                        right: '4px',
                                        cursor: 'pointer',
                                        color: '#0d6efd'
                                    }}
                                    onClick={() => {
                                        setFullDescription(project.description);
                                        setShowDescription(true);
                                    }}
                                    title="View full description"
                                />
                            </td>
                            <td>
                                <img src={project.image} alt={project.title[lang]} style={{ height: '60px', objectFit: 'cover' }} />
                            </td>
                            <td style={{ width: '100px' }}>{project.link}</td>
                            <td>{new Date(project.date).toLocaleDateString()}</td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(project)}><FaEdit /></Button>
                                <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(project._id)}><FaTrash /></Button>
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
                    <Modal.Title>{isEditing ? 'Edit Project' : 'Create Project'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title (English)</Form.Label>
                            <Form.Control
                                type="text"
                                value={projectData.title.en}
                                onChange={(e) => setProjectData({ ...projectData, title: { ...projectData.title, en: e.target.value } })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Title (Arabic)</Form.Label>
                            <Form.Control
                                type="text"
                                value={projectData.title.ar}
                                onChange={(e) => setProjectData({ ...projectData, title: { ...projectData.title, ar: e.target.value } })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description (English)</Form.Label>
                            <Form.Control
                                type="text"
                                value={projectData.description.en}
                                onChange={(e) => setProjectData({ ...projectData, description: { ...projectData.description, en: e.target.value } })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description (Arabic)</Form.Label>
                            <Form.Control
                                type="text"
                                value={projectData.description.ar}
                                onChange={(e) => setProjectData({ ...projectData, description: { ...projectData.description, ar: e.target.value } })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                type="text"
                                value={projectData.link}
                                onChange={(e) => setProjectData({ ...projectData, link: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='mx-2'>Upload Image (1064 * 1160 recommended webp format)</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={(e) => setProjectData({ ...projectData, image: e.target.files[0] })}
                            />
                        </Form.Group>

                        <Button type="submit" variant="success">{isEditing ? 'Update' : 'Create'}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Projects;
