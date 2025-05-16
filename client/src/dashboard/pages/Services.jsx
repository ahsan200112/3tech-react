import React, { useEffect, useState } from "react";
import {
    Table,
    Button,
    Modal,
    Form,
    Input,
    Upload,
    Image,
    message,
} from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    EyeOutlined,
    UploadOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import api from "../../api/api";
import {
    getServices,
    createService,
    updateService,
    deleteService,
} from "../../api/apiEndpoints";
import { useTranslation } from "react-i18next";
import usePermission from "../../hooks/usePermission";

const Services = () => {
    const { t } = useTranslation();
    const [services, setServices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFullViewOpen, setIsFullViewOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedDeleteId, setSelectedDeleteId] = useState(null);
    const [serviceData, setServiceData] = useState({
        title: { en: "", ar: "" },
        image: null,
        description: { en: "", ar: "" },
        link: "",
    });
    const { canCreate, canEdit, canDelete } = usePermission("Services");

    // Fetch Services
    const fetchServices = async () => {
        try {
            const res = await api.get(getServices);
            setServices(res.data);
        } catch (error) {
            console.error("ERROR", error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    // Modal Close
    const handleClose = () => {
        setIsModalOpen(false);
        setIsEditing(false);
        setServiceData({ title: { en: "", ar: "" }, image: null, description: { en: "", ar: "" }, link: "" });
    };

    // Submit Handler
    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append("title[en]", serviceData.title.en);
            formData.append("title[ar]", serviceData.title.ar);
            formData.append("description[en]", serviceData.description.en);
            formData.append("description[ar]", serviceData.description.ar);
            formData.append("link", serviceData.link);
            if (serviceData.image instanceof File) {
                formData.append("image", serviceData.image);
            }

            if (isEditing) {
                await api.put(updateService(serviceData._id), formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                message.success(t("Service updated successfully"));
            } else {
                await api.post(createService, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                message.success(t("Service created successfully"));
            }
            handleClose();
            fetchServices();
        } catch (error) {
            message.error(t("Error saving service"));
            console.error(error);
        }
    };

    // Edit handler
    const handleEdit = (service) => {
        setServiceData({
            title: { en: service.title.en, ar: service.title.ar },
            description: { en: service.description.en, ar: service.description.ar },
            link: service.link,
            image: service.image,
            _id: service._id,
        });
        setIsEditing(true);
        setIsModalOpen(true);
    };

    // Delete handler
    const handleDelete = (id) => {
        setSelectedDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        try {
            await api.delete(deleteService(selectedDeleteId));
            message.success(t("Service deleted successfully"));
            fetchServices();
        } catch (error) {
            message.error(t("Failed to delete service"));
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
    // Columns for AntD Table
    const columns = [
        {
            title: t("Title (English)"),
            dataIndex: ["title", "en"],
            key: "titleEn",
            render: (text) => <span>{text}</span>,
        },
        {
            title: t("Title (Arabic)"),
            dataIndex: ["title", "ar"],
            key: "titleAr",
            render: (text) => <span>{text}</span>,
        },
        {
            title: t("Image"),
            dataIndex: "image",
            key: "image",
            render: (img) => (
                <Image
                    src={img}
                    alt="service"
                    width={60}
                    height={60}
                    style={{ objectFit: "cover" }}
                    preview={{ mask: <EyeOutlined /> }}
                />
            ),
        },
        {
            title: t("Link"),
            dataIndex: "link",
            key: "link",
            render: (link) => (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                </a>
            ),
        },
        {
            title: t("Actions"),
            key: "actions",
            width: 180,
            render: (_, record) => (
                <>
                    <Button
                        style={{ marginRight: 4, marginLeft: 4 }}
                        icon={<EyeOutlined />}
                        onClick={() => {
                            setServiceData(record);
                            setIsFullViewOpen(true);
                        }}
                    />
                    {canEdit && (
                        <Button
                            style={{ marginRight: 4, marginLeft: 4 }}
                            icon={<EditOutlined />}
                            onClick={() => handleEdit(record)}
                        />
                    )}

                    {
                        canDelete && (
                            <Button
                                style={{ marginRight: 4, marginLeft: 4 }}
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => handleDelete(record._id)}
                            />
                        )
                    }
                </>
            ),
        },
    ];

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{t("Service Management")}</h2>
                {canCreate && (
                    <Button type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => setIsModalOpen(true)}>
                        {t("Add New Service")}
                    </Button>
                )}
            </div>

            <div className="ant-table-wrapper custom-ant-table">
                <Table
                    columns={columns}
                    dataSource={services}
                    rowKey={(record) => record._id}
                    pagination={false}
                />
            </div>

            {/* Full View Modal */}
            <div>
                <Modal
                    title={`🛠️ ${t("Service Details")}`}
                    open={isFullViewOpen}
                    footer={[
                        <Button key="close" onClick={() => setIsFullViewOpen(false)}>
                            {t("Close")}
                        </Button>,
                    ]}
                    onCancel={() => setIsFullViewOpen(false)}
                    width={800}
                    centered
                >
                    <div style={{marginBottom:"20px"}}></div>
                    <div className="row mb-3">
                    <div className="col-md-6">
                        <strong>📝 {t("Title (English)")}:</strong> {serviceData?.title?.en}
                    </div>
                    <div className="col-md-6">
                        <strong>📝 {t("Title (Arabic)")}:</strong> {serviceData?.title?.ar}
                    </div>
                    </div>
                    <div className="mb-3">
                        <strong>🔗 {t("Link")}:</strong> {serviceData?.link}
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
                            <div style={{ marginTop: 10 }}>
                                <Image src={serviceData.image} alt="Service" />
                            </div>
                        </div>
                    )}
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
                    <p>{t("Are you sure you want to delete this service?")}</p>
                </Modal>
            </div>

            {/* Create/Edit Modal */}
            <div>
                <Modal
                    title={isEditing ? t("Edit Service") : t("Create Service")}
                    open={isModalOpen}
                    onCancel={handleClose}
                    onOk={handleSubmit}
                    okText={isEditing ? t("Update") : t("Create")}
                    width={700}
                    centered
                    destroyOnHidden
                >
                    <div style={{ marginBottom: "20px" }}></div>
                    <Form layout="vertical" onFinish={handleSubmit}>
                        <Form.Item
                            label={t("Title (English)")}
                            required
                            rules={[{ required: true, message: t("Please input title in English!") }]}
                        >
                            <Input
                                value={serviceData.title.en}
                                onChange={(e) =>
                                    setServiceData({
                                        ...serviceData,
                                        title: { ...serviceData.title, en: e.target.value },
                                    })
                                }
                                placeholder={t("Enter English title")}
                            />
                        </Form.Item>

                        <Form.Item
                            label={t("Title (Arabic)")}
                            required
                            rules={[{ required: true, message: t("Please input title in Arabic!") }]}
                        >
                            <Input
                                value={serviceData.title.ar}
                                style={{ direction: 'rtl' }}
                                onChange={(e) =>
                                    setServiceData({
                                        ...serviceData,
                                        title: { ...serviceData.title, ar: e.target.value },
                                    })
                                }
                                placeholder={t("Enter Arabic title")}
                            />
                        </Form.Item>

                        <Form.Item label={t("Description (English)")} required>
                            <Input.TextArea
                                value={serviceData.description.en}
                                onChange={(e) =>
                                    setServiceData({
                                        ...serviceData,
                                        description: { ...serviceData.description, en: e.target.value },
                                    })
                                }
                                rows={3}
                                placeholder={t("Enter English description")}
                            />
                        </Form.Item>

                        <Form.Item label={t("Description (Arabic)")} required>
                            <Input.TextArea
                                value={serviceData.description.ar}
                                style={{ direction: 'rtl' }}
                                onChange={(e) =>
                                    setServiceData({
                                        ...serviceData,
                                        description: { ...serviceData.description, ar: e.target.value },
                                    })
                                }
                                rows={3}
                                placeholder={t("Enter Arabic description")}
                            />
                        </Form.Item>

                        <Form.Item label={t("Link")} required>
                            <Input
                                value={serviceData.link}
                                onChange={(e) =>
                                    setServiceData({ ...serviceData, link: e.target.value })
                                }
                                placeholder={t("Enter link")}
                            />
                        </Form.Item>

                        <Form.Item label={t("Upload Image (60 * 60 recommended webp format)")} required>
                            <Upload
                                beforeUpload={(file) => {
                                    setServiceData({ ...serviceData, image: file });
                                    return false; // prevent auto upload
                                }}
                                maxCount={1}
                                accept="image/*"
                                showUploadList={{
                                    showRemoveIcon: true,
                                }}
                                onRemove={() => setServiceData({ ...serviceData, image: null })}
                            >
                                <Button icon={<UploadOutlined />}>{t("Select File")}</Button>
                            </Upload>
                            {serviceData.image && typeof serviceData.image === "string" && (
                                <Image
                                    src={serviceData.image}
                                    alt="Service"
                                    width={60}
                                    height={60}
                                    style={{ marginTop: 8 }}
                                />
                            )}
                            {serviceData.image && serviceData.image instanceof File && (
                                <div style={{ marginTop: 8 }}>{serviceData.image.name}</div>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    );
};

export default Services;
