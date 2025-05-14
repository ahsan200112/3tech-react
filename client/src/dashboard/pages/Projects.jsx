import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { getProjects, createProject, updateProject, deleteProject } from '../../api/apiEndpoints';
import { useTranslation } from 'react-i18next';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import usePermission from '../../hooks/usePermission';

const Projects = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const [projects, setProjects] = useState([]);
    const [show, setShow] = useState(false);
    const [showFullModal, setShowFullModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [projectData, setProjectData] = useState({
        title: { en: '', ar: '' },
        image: null,
        description: { en: '', ar: '' },
        /*  link: '' */
    });

    const { canCreate, canEdit, canDelete } = usePermission("Projects");

    const fetchProjects = async () => {
        try {
            const res = await api.get(getProjects);
            // console.log('Fetched projects:', res.data); // 👈 Add this
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
        setProjectData({ title: { en: '', ar: '' }, image: '', description: { en: '', ar: '' }, /*link: ''*/ });
    };

    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title[en]', projectData.title.en);
        formData.append('title[ar]', projectData.title.ar);
        formData.append('description[en]', projectData.description.en);
        formData.append('description[ar]', projectData.description.ar);
        /* formData.append('link', projectData.link); */
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
            /*  link: project.link, */
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
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{t("Project Management")}</h2>
                {canCreate && (
                    <Button variant="primary" onClick={handleShow}>{t("Add New Project")}</Button>
                )}
            </div>
            <Table bordered hover responsive className="custom-table">
                <thead>
                    <tr>
                        <th>{t("Title (English)")}</th>
                        <th>{t("Title (Arabic)")}</th>
                        {/* <th>Description (English)</th>
                        <th>Description (Arabic)</th> */}
                        <th>{t("Image")}</th>
                        {/*  <th>Link</th> */}
                        {/*  <th>Date</th> */}
                        <th>{t("Actions")}</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(project => (
                        <tr key={project._id}>
                            <td>{project.title.en}</td>
                            <td>{project.title.ar}</td>
                            {/* <td>
                                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: project.description.en }}></div>
                            </td>
                            <td>
                                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: project.description.ar }}></div>
                            </td> */}
                            <td className="table-image-cell">
                                <img src={project.image} alt={project.title[lang]} style={{ height: '60px', objectFit: 'cover' }} />
                            </td>
                            {/* <td style={{ width: '100px' }}>{project.link}</td> */}
                            {/* <td>{new Date(project.date).toLocaleDateString()}</td> */}
                            <td style={{width:"150px"}}>
                                <Button variant="outline-success" size="sm" className="mx-1 my-1"
                                    onClick={() => {
                                        setProjectData(project);
                                        setShowFullModal(true);
                                    }}>
                                    <FaEye />
                                </Button>
                                {canEdit && (
                                    <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(project)}><FaEdit /></Button>
                                )}
                                {canDelete && (
                                    <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(project._id)}><FaTrash /></Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Full view modal for project details */}
            <Modal
                show={showFullModal}
                onHide={() => setShowFullModal(false)}
                size="lg"
                centered
                scrollable
            >
                <Modal.Header closeButton>
                    <Modal.Title>📁 {t("Project Details")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <strong>📝 {t("Title (English)")}:</strong> {projectData?.title?.en}
                        </div>
                        <div className="col-md-6 mb-2">
                            <strong>📝 {t("Title (Arabic)")}:</strong> {projectData?.title?.ar}
                        </div>
                    </div>

                    <hr />

                    <div className="mb-3">
                        <strong>📝 {t("Description (English)")}:</strong>
                        <div
                            className="border rounded p-2 mt-1"
                            style={{ backgroundColor: "#f9f9f9" }}
                            dangerouslySetInnerHTML={{ __html: projectData?.description?.en }}
                        />
                    </div>

                    <div className="mb-3">
                        <strong>📝 {t("Description (Arabic)")}:</strong>
                        <div
                            className="border rounded p-2 mt-1"
                            style={{ backgroundColor: "#f9f9f9" }}
                            dangerouslySetInnerHTML={{ __html: projectData?.description?.ar }}
                        />
                    </div>

                    {projectData.image && (
                        <div>
                            <strong>🖼️ {t("Project Image")}:</strong>
                            <div className="mt-2">
                                <img
                                    src={projectData.image}
                                    alt="Project"
                                    style={{ maxWidth: "100%", height: "auto" }}
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
                    <Modal.Title>{isEditing ? t('Edit Project') : t('Create Project')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Title (English)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={projectData.title.en}
                                onChange={(e) => setProjectData({ ...projectData, title: { ...projectData.title, en: e.target.value } })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t("Title (Arabic)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={projectData.title.ar}
                                onChange={(e) => setProjectData({ ...projectData, title: { ...projectData.title, ar: e.target.value } })}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t("Description (English)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={projectData.description.en}
                                onChange={(e) => setProjectData({ ...projectData, description: { ...projectData.description, en: e.target.value } })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t("Description (Arabic)")}</Form.Label>
                            <Form.Control
                                type="text"
                                value={projectData.description.ar}
                                onChange={(e) => setProjectData({ ...projectData, description: { ...projectData.description, ar: e.target.value } })}
                            />
                        </Form.Group>
                        {/*
                        <Form.Group className="mb-3">
                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                type="text"
                                value={projectData.link}
                                onChange={(e) => setProjectData({ ...projectData, link: e.target.value })}
                            />
                        </Form.Group> */}

                        <Form.Group className="mb-3">
                            <Form.Label className='mx-2'>{t("Upload Image (1064 * 1160 recommended webp format)")}</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={(e) => setProjectData({ ...projectData, image: e.target.files[0] })}
                            />
                        </Form.Group>

                        <Button type="submit" variant="success">{isEditing ? t('Update') : t('Create')}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Projects;
