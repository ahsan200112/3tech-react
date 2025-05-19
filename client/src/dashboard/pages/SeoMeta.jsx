import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import api from "../../api/api";
import {
    getSEOMetas,
    createSEOMeta,
    updateSEOMeta,
    deleteSEOMeta,
} from "../../api/apiEndpoints";
import usePermission from "../../hooks/usePermission";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;

const SeoMeta = () => {
    const { t } = useTranslation();
    const [seoMetas, setSeoMetas] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedDeleteId, setSelectedDeleteId] = useState(null);
    const [seoData, setSeoData] = useState({
        page: "",
        title: "",
        description: "",
    });

    const [form] = Form.useForm();

    const { canCreate, canEdit, canDelete } = usePermission("SeoMeta");

    const fetchSEOMetas = async () => {
        try {
            const res = await api.get(getSEOMetas);
            setSeoMetas(res.data);
        } catch (error) {
            message.error(t("Error fetching SEO meta data"));
            console.error("Error fetching SEO meta data:", error);
        }
    };

    useEffect(() => {
        fetchSEOMetas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setIsEditing(false);
        form.resetFields();
    };

    const onFinish = async (values) => {
        try {
            if (isEditing) {
                await api.put(updateSEOMeta(seoData._id), values);
                message.success(t("SEO Meta updated successfully"));
            } else {
                await api.post(createSEOMeta, values);
                message.success(t("SEO Meta created successfully"));
            }
            handleCancel();
            fetchSEOMetas();
        } catch (err) {
            message.error(t("Error saving SEO meta"));
            console.error("Error saving SEO meta:", err);
        }
    };

    const handleEdit = (record) => {
        setSeoData(record);
        setIsEditing(true);
        form.setFieldsValue({
            page: record.page,
            title: record.title,
            description: record.description,
        });
        showModal();
    };

    // Delete handler
    const handleDelete = (id) => {
        setSelectedDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        try {
            await api.delete(deleteSEOMeta(selectedDeleteId));
            message.success(t("SeoMeta deleted successfully"));
            fetchSEOMetas();
        } catch (error) {
            message.error(t("Failed to delete SeoMeta"));
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

    const columns = [
        {
            title: t("Page Link"),
            dataIndex: "page",
            key: "page",
        },
        {
            title: t("Title"),
            dataIndex: "title",
            key: "title",
        },
        {
            title: t("Description"),
            dataIndex: "description",
            key: "description",
            ellipsis: true,
        },
        {
            title: t("Date"),
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text) => new Date(text).toLocaleDateString(),
        },
        {
            title: t("Actions"),
            key: "actions",
            render: (_, record) => (
                <>
                    {canEdit && (
                        <Button
                            style={{ marginRight: 4, marginLeft: 4 }}
                            icon={<EditOutlined />}
                            onClick={() => handleEdit(record)}
                        />
                    )}
                    {canDelete && (
                        <Button style={{ marginRight: 4, marginLeft: 4 }} danger icon={<DeleteOutlined />}
                            onClick={() => handleDelete(record._id)}
                        />
                    )}
                </>
            ),
        },
    ];

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-sm-center mb-4 flex-column flex-sm-row align-items-start">
                <h2 className="mb-2 mb-sm-0">{t("SEO Meta Management")}</h2>
                {canCreate && (
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="w-sm-auto"
                        onClick={() => {
                            form.resetFields();
                            setIsEditing(false);
                            showModal();
                        }}
                    >
                        {t("Add New SEO Meta")}
                    </Button>
                )}
            </div>

            <div className="ant-table-wrapper custom-ant-table">
                <Table
                    dataSource={seoMetas}
                    columns={columns}
                    rowKey={(record) => record._id}
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
                    <p>{t("Are you sure you want to delete this SeoMeta?")}</p>
                </Modal>
            </div>

            <div>
                <Modal
                    title={isEditing ? t("Edit SEO Meta") : t("Create SEO Meta")}
                    open={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                    destroyOnHidden
                    width={800}
                    centered
                >
                    <div style={{ marginBottom: "20px" }}></div>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={seoData}
                    >
                        <Form.Item
                            label={t("Page Link")}
                            name="page"
                            rules={[
                                { required: true, message: t("Please input the page link!") },
                                {
                                    pattern: /^\/.*$/,
                                    message: t("Page link should start with '/'"),
                                },
                            ]}
                        >
                            <Input placeholder="/, /ecommercesolutions, /services" />
                        </Form.Item>

                        <Form.Item
                            label={t("Title")}
                            name="title"
                            rules={[{ required: true, message: t("Please input the title!") }]}
                        >
                            <Input style={{ direction: 'rtl' }} />
                        </Form.Item>

                        <Form.Item
                            label={t("Description")}
                            name="description"
                            rules={[
                                { required: true, message: t("Please input the description!") },
                            ]}
                        >
                            <TextArea rows={3} style={{ direction: 'rtl' }} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                {isEditing ? t("Update") : t("Create")}
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    );
};

export default SeoMeta;
