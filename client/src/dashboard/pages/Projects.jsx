import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import { getProjects, createProject, updateProject, deleteProject } from '../../api/apiEndpoints';
import { useTranslation } from 'react-i18next';
import { Table, Button, Modal, Form, Input, Upload, Image, message } from 'antd';
import { PlusOutlined, UploadOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import usePermission from '../../hooks/usePermission';

const Projects = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);
    const [form] = Form.useForm();
    const [showModal, setShowModal] = useState(false);
    const [showFullModal, setShowFullModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [fullProjectData, setFullProjectData] = useState({});
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedDeleteId, setSelectedDeleteId] = useState(null);

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

    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append('title[en]', values.title_en);
        formData.append('title[ar]', values.title_ar);
        formData.append('description[en]', values.description_en);
        formData.append('description[ar]', values.description_ar);
        if (values.image?.file) {
            formData.append('image', values.image.file.originFileObj);
        }

        try {
            if (isEditing) {
                await api.put(updateProject(editingId), formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                message.success(t('Project updated successfully'));
            } else {
                await api.post(createProject, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                message.success(t('Project created successfully'));
            }
            fetchProjects();
            setShowModal(false);
            form.resetFields();
            setIsEditing(false);
        } catch (error) {
            message.error(t('Something went wrong!'));
        }
    };

    // Delete handler
    const handleDelete = (id) => {
        setSelectedDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        try {
            await api.delete(deleteProject(selectedDeleteId));
            message.success(t("Project deleted successfully"));
            fetchProjects();
        } catch (error) {
            message.error(t("Failed to delete project"));
            console.error(error);
        } finally {
            setIsDeleteModalOpen(false);
            setSelectedDeleteId(null);
        }
    };

    const cancelDelete = () => {
        setIsDeleteModalOpen(false);
        setSelectedDeleteId(null);
    };

    const handleEdit = (project) => {
        setIsEditing(true);
        setEditingId(project._id);
        form.setFieldsValue({
            title_en: project.title.en,
            title_ar: project.title.ar,
            description_en: project.description.en,
            description_ar: project.description.ar,
        });
        setShowModal(true);
    };

    const columns = [
        {
            title: t('Title (English)'),
            dataIndex: ['title', 'en'],
            key: 'title_en',
        },
        {
            title: t('Title (Arabic)'),
            dataIndex: ['title', 'ar'],
            key: 'title_ar',
        },
        {
            title: t('Image'),
            dataIndex: 'image',
            key: 'image',
            render: (src) => <Image width={60} height={60} src={src} />,
        },
        {
            title: t('Actions'),
            key: 'actions',
            render: (_, record) => (
                <>
                    <Button
                        icon={<EyeOutlined />}
                        style={{ marginRight: 4, marginLeft: 4 }}
                        onClick={() => {
                            setFullProjectData(record);
                            setShowFullModal(true);
                        }}
                    />
                    {canEdit && (
                        <Button icon={<EditOutlined />} style={{ marginRight: 4, marginLeft: 4 }} onClick={() => handleEdit(record)} />
                    )}
                    {canDelete && (
                        <Button danger icon={<DeleteOutlined />} style={{ marginRight: 4, marginLeft: 4 }} onClick={() => handleDelete(record._id)} />
                    )}
                </>
            ),
        },
    ];

    return (
        <>
            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-sm-center mb-4 flex-column flex-sm-row align-items-start">
                    <h2 className="mb-2 mb-sm-0">{t("Project Management")}</h2>
                    {canCreate && (
                        <Button type="primary" icon={<PlusOutlined />} className="w-sm-auto" onClick={() => setShowModal(true)}>
                            {t('Add New Project')}
                        </Button>
                    )}
                </div>

                <div className="ant-table-wrapper custom-ant-table">
                    <Table
                        rowKey="_id"
                        columns={columns}
                        dataSource={projects}
                        pagination={false}
                        scroll={{ x: 'max-content' }}
                    />
                </div>

                {/* modal for delete */}
                <div>
                    <Modal
                        title={t("Confirm Delete")}
                        open={isDeleteModalOpen}
                        onOk={confirmDelete}
                        onCancel={cancelDelete}
                        okText={t("Yes, Delete")}
                        cancelText={t("Cancel")}
                        centered
                        okButtonProps={{ danger: true }}
                    >
                        <p>{t("Are you sure you want to delete this project?")}</p>
                    </Modal>
                </div>

                {/* Modal for create/edit */}
                <div>
                    <Modal
                        title={isEditing ? t('Edit Project') : t('Create Project')}
                        open={showModal}
                        onCancel={() => {
                            setShowModal(false);
                            setIsEditing(false);
                            form.resetFields();
                        }}
                        onOk={() => form.submit()}
                        width={800}
                        centered
                    >
                        <Form layout="vertical" form={form} onFinish={handleSubmit}>
                            <Form.Item
                                label={t("Title (English)")}
                                name="title_en"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label={t("Title (Arabic)")}
                                name="title_ar"
                                rules={[{ required: true }]}
                            >
                                <Input style={{ direction: 'rtl' }} />
                            </Form.Item>
                            <Form.Item
                                label={t("Description (English)")}
                                name="description_en"
                                rules={[{ required: true }]}
                            >
                                <Input.TextArea rows={2} />
                            </Form.Item>
                            <Form.Item
                                label={t("Description (Arabic)")}
                                name="description_ar"
                                rules={[{ required: true }]}
                            >
                                <Input.TextArea rows={2} style={{ direction: 'rtl' }} />
                            </Form.Item>
                            <Form.Item
                                label={t("Upload Image (1064 * 1160 recommended webp format)")}
                                name="image"
                                valuePropName="fileList"
                                rules={[{ required: true }]}
                                getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                            >
                                <Upload maxCount={1} beforeUpload={() => false} listType="picture">
                                    <Button icon={<UploadOutlined />}>{t('Select File')}</Button>
                                </Upload>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>

                {/* Full view modal */}
                <div>
                    <Modal
                        open={showFullModal}
                        onCancel={() => setShowFullModal(false)}
                        footer={[
                            <Button key="close" onClick={() => setShowFullModal(false)}>
                                {t("Close")}
                            </Button>
                        ]}
                        width={800}
                        centered
                        scrollable
                        title={t('Project Details')}
                    >
                        <div style={{ marginBottom: "20px" }}></div>
                        <div className="row mb-3">
                            <div className="col-md-6"><strong>{t("Title (English)")}:</strong> {fullProjectData?.title?.en}</div>
                            <div className="col-md-6"><strong>{t("Title (Arabic)")}:</strong> {fullProjectData?.title?.ar}</div>
                        </div>
                        <div className='mb-3'>
                            <strong>📝 {t("Description (English)")}:</strong>
                            <div
                                className="border rounded p-2 mt-1"
                                style={{ backgroundColor: "#f9f9f9" }}
                                dangerouslySetInnerHTML={{ __html: fullProjectData?.description?.en }}
                            />
                        </div>
                        <div className='mb-3'>
                            <strong>📝 {t("Description (Arabic)")}:</strong>
                            <div
                                className="border rounded p-2 mt-1"
                                style={{ backgroundColor: "#f9f9f9" }}
                                dangerouslySetInnerHTML={{ __html: fullProjectData?.description?.ar }}
                            />
                        </div>
                        {fullProjectData.image && (
                            <div>
                                <strong>🖼️ {t("Project Image")}:</strong>
                                <div className='mb-2'>
                                    <img src={fullProjectData.image} alt="Project" style={{ maxWidth: '100%' }} />
                                </div>
                            </div>

                        )}
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default Projects;
