import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form, Input, message } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    EyeOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import api from '../../api/api';
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../../api/apiEndpoints';
import usePermission from '../../hooks/usePermission';
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
    const { t } = useTranslation();
    const [testimonials, setTestimonials] = useState([]);
    const [show, setShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showFullModal, setShowFullModal] = useState(false);
    const [form] = Form.useForm();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedDeleteId, setSelectedDeleteId] = useState(null);
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

    const handleCancel = () => {
        setShow(false);
        setIsEditing(false);
        form.resetFields();
        setTestimonialData({
            message: { en: '', ar: '' },
            name: { en: '', ar: '' },
            position: { en: '', ar: '' },
        });
    };

    const handleEdit = (testimonial) => {
        setTestimonialData(testimonial);
        form.setFieldsValue({
            messageEn: testimonial.message.en,
            messageAr: testimonial.message.ar,
            nameEn: testimonial.name.en,
            nameAr: testimonial.name.ar,
            positionEn: testimonial.position.en,
            positionAr: testimonial.position.ar,
        });
        setIsEditing(true);
        setShow(true);
    };

    // Delete handler
    const handleDelete = (id) => {
        setSelectedDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        try {
            await api.delete(deleteTestimonial(selectedDeleteId));
            message.success(t("Testimonial deleted successfully"));
            fetchTestimonial();
        } catch (error) {
            message.error(t("Failed to delete testimonial"));
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

    const handleSubmit = async (values) => {
        const payload = {
            message: { en: values.messageEn, ar: values.messageAr },
            name: { en: values.nameEn, ar: values.nameAr },
            position: { en: values.positionEn, ar: values.positionAr },
        };

        if (isEditing) {
            await api.put(updateTestimonial(testimonialData._id), payload);
        } else {
            await api.post(createTestimonial, payload);
        }

        handleCancel();
        fetchTestimonial();
    };

    const columns = [
        {
            title: t("Name (Arabic)"),
            dataIndex: ['name', 'ar'],
            key: 'nameAr',
        },
        {
            title: t("Position (Arabic)"),
            dataIndex: ['position', 'ar'],
            key: 'positionAr',
        },
        {
            title: t("Actions"),
            key: 'actions',
            render: (_, record) => (
                <>
                    <Button
                        style={{ marginRight: 4, marginLeft: 4 }}
                        icon={<EyeOutlined />}
                        onClick={() => {
                            setTestimonialData(record);
                            setShowFullModal(true);
                        }}
                    />
                    {canEdit && (
                        <Button
                            style={{ marginRight: 4, marginLeft: 4 }}
                            icon={<EditOutlined />}
                            onClick={() => handleEdit(record)}
                        />
                    )}
                    {canDelete && (
                        <Button
                            style={{ marginRight: 4, marginLeft: 4 }}
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => handleDelete(record._id)} />
                    )}
                </>
            ),
        },
    ];

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{t("Testimonial Management")}</h2>
                {canCreate && (
                    <Button type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => setShow(true)}>
                        {t("Add New Testimonial")}
                    </Button>
                )}
            </div>

            <div className="ant-table-wrapper custom-ant-table">
                <Table
                    columns={columns}
                    dataSource={testimonials}
                    rowKey="_id"
                    pagination={false}
                />
            </div>

            {/* Full view modal */}
            <div>
                <Modal
                    title={`🗣️ ${t("Testimonial Details")}`}
                    open={showFullModal}
                    footer={[
                        <Button key="close" onClick={() => setShowFullModal(false)}>
                            {t("Close")}
                        </Button>,
                    ]}
                    onCancel={() => setShowFullModal(false)}
                    width={800}
                >
                    <div style={{ marginBottom: "20px" }}></div>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <strong>👤 {t("Name (English)")}: </strong> {testimonialData?.name?.en}
                        </div>
                        <div className="col-md-6 mb-2">
                            <strong>👤 {t("Name (Arabic)")}: </strong> {testimonialData?.name?.ar}
                        </div>
                        <div className="col-md-6 mb-2">
                            <strong>💼 {t("Position (English)")}: </strong> {testimonialData?.position?.en}
                        </div>
                        <div className="col-md-6 mb-2">
                            <strong>💼 {t("Position (Arabic)")}: </strong> {testimonialData?.position?.ar}
                        </div>
                    </div>

                    <hr />

                    <div className="mb-3">
                        <strong>📝 {t("Message (English)")}: </strong>
                        <div className="border rounded p-2 mt-1" style={{ backgroundColor: "#f9f9f9" }}>
                            {testimonialData?.message?.en}
                        </div>
                    </div>

                    <div className="mb-3">
                        <strong>📝 {t("Message (Arabic)")}: </strong>
                        <div className="border rounded p-2 mt-1" style={{ backgroundColor: "#f9f9f9" }}>
                            {testimonialData?.message?.ar}
                        </div>
                    </div>
                </Modal>
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
                    <p>{t("Are you sure you want to delete this testimonail?")}</p>
                </Modal>
            </div>

            {/* Create/Edit Modal */}
            <div>
                <Modal
                    title={isEditing ? t('Edit Testimonial') : t('Create Testimonial')}
                    open={show}
                    onCancel={handleCancel}
                    onOk={() => form.submit()}
                    okText={isEditing ? t("Update") : t("Create")}
                    width={800}
                    centered
                >
                    <div style={{marginBottom:"20px"}}></div>
                    <Form layout="vertical" form={form} onFinish={handleSubmit}>
                        <Form.Item
                            label={t("Message (English)")}
                            name="messageEn"
                            rules={[{ required: true }]}
                        >
                            <Input.TextArea rows={3} />
                        </Form.Item>

                        <Form.Item
                            label={t("Message (Arabic)")}
                            name="messageAr"
                            rules={[{ required: true }]}
                        >
                            <Input.TextArea rows={3} style={{ direction: 'rtl' }} />
                        </Form.Item>

                        <Form.Item
                            label={t("Name (English)")}
                            name="nameEn"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label={t("Name (Arabic)")}
                            name="nameAr"
                            rules={[{ required: true }]}
                        >
                            <Input style={{ direction: 'rtl' }} />
                        </Form.Item>

                        <Form.Item
                            label={t("Position (English)")}
                            name="positionEn"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label={t("Position (Arabic)")}
                            name="positionAr"
                            rules={[{ required: true }]}
                        >
                            <Input style={{ direction: 'rtl' }} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    );
};

export default Testimonial;
