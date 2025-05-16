import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form, Select, Input, message } from 'antd';
import api from '../../api/api';
import { getFAQ, createFAQ, updateFAQ, deleteFAQ, getFAQCategories } from '../../api/apiEndpoints';
import { EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import usePermission from '../../hooks/usePermission';

const { Option } = Select;
const { TextArea } = Input;

const FAQ = () => {
    const { t, i18n } = useTranslation();
    const RTL = i18n.dir() === "rtl";
    const [filteredFaqs, setFilteredFaqs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [faqs, setFaqs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showFullModal, setShowFullModal] = useState(false);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedDeleteId, setSelectedDeleteId] = useState(null);
    const [faqData, setFaqData] = useState({
        question: { en: '', ar: '' },
        answer: { en: '', ar: '' },
        category: ''
    });

    const { canCreate, canEdit, canDelete } = usePermission("Faqs");
    const [form] = Form.useForm();

    const fetchCategories = async () => {
        try {
            const res = await api.get(getFAQCategories);
            setCategoryOptions(res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const fetchFaq = async () => {
        try {
            const res = await api.get(getFAQ);
            //  console.log('Fetched faqs:', res.data); // 👈 Add this
            setFaqs(res.data);
            setFilteredFaqs(res.data);
        } catch (error) {
            console.error('ERROR', error);
        }
    };

    //console.log("category:", categoryOptions);

    useEffect(() => {
        fetchFaq();
        fetchCategories();
    }, []);

    const handleClose = () => {
        setShowModal(false);
        setIsEditing(false);
        setFaqData({ question: { en: '', ar: '' }, answer: { en: '', ar: '' }, category: '' });
        form.resetFields();
    };


    const handleSubmit = async (values) => {
        try {
            const payload = {
                ...values,
                question: { ...values.question },
                answer: { ...values.answer }
            };

            if (isEditing) {
                await api.put(updateFAQ(faqData._id), payload);
            } else {
                await api.post(createFAQ, payload);
            }
            handleClose();
            fetchFaq();
        } catch (error) {
            console.error("Error saving FAQ:", error);
        }
    };

    const handleEdit = (faq) => {
        setFaqData(faq);
        setIsEditing(true);
        // Set form values to the selected FAQ data
        form.setFieldsValue({
            question: faq.question,
            answer: faq.answer,
            category: faq.category,
        });
        setShowModal(true);
    };

    // Delete handler
    const handleDelete = (id) => {
        setSelectedDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        try {
            await api.delete(deleteFAQ(selectedDeleteId));
            message.success(t("Faq deleted successfully"));
            fetchFaq();
        } catch (error) {
            message.error(t("Failed to delete faq"));
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

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredFaqs(faqs);
        } else {
            const filtered = faqs.filter(faq => faq.category === category);
            setFilteredFaqs(filtered);
        }
    };

    const columns = [
        {
            title: t("Question (Arabic)"),
            dataIndex: ['question', 'ar'],
            key: 'question_ar',
        },
        {
            title: t("Answer (Arabic)"),
            dataIndex: ['answer', 'ar'],
            key: 'answer_ar',
        },
        {
            title: t("Actions"),
            key: 'actions',
            width: 180,
            render: (_, faq) => (
                <>
                    <Button
                        icon={<EyeOutlined />}
                        style={{ marginRight: 4, marginLeft: 4 }}
                        onClick={() => {
                            setFaqData(faq);
                            setShowFullModal(true);
                        }}
                    />
                    {canEdit && (
                        <Button
                            icon={<EditOutlined />}
                            style={{ marginRight: 4, marginLeft: 4 }}
                            onClick={() => handleEdit(faq)}
                        />

                    )}
                    {canDelete && (
                        <Button
                            icon={<DeleteOutlined />}
                            style={{ marginRight: 4, marginLeft: 4 }}
                            danger
                            onClick={() => handleDelete(faq._id)}
                        />
                    )}
                </>
            ),
        },
    ];

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>{t("FAQ Management")}</h2>
                {canCreate && (
                    <Button type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => {
                            setIsEditing(false);
                            setFaqData({ question: { en: '', ar: '' }, answer: { en: '', ar: '' }, category: '' });
                            form.resetFields();
                            setShowModal(true);
                        }}>{t("Add New FAQ")}</Button>
                )}
            </div>

            {/* Category Filter Buttons */}
            <div className="mb-3">
                <Button
                    variant={selectedCategory === 'All' ? 'primary' : 'outline-primary'}
                    className={`${RTL ? 'ms-2' : 'me-2'} mb-2 ${selectedCategory === 'All' ? 'active-button' : ''}`}
                    onClick={() => handleCategoryFilter('All')}
                >
                    {t("All")}
                </Button>
                {categoryOptions.map((cat, idx) => (
                    <Button
                        key={idx}
                        variant={selectedCategory === cat ? 'primary' : 'outline-primary'}
                        className={`${RTL ? 'ms-2' : 'me-2'} mb-2 ${selectedCategory === cat ? 'active-button' : ''}`}
                        onClick={() => handleCategoryFilter(cat)}
                    >
                        {t(cat)}
                    </Button>
                ))}
            </div>

            <div className="ant-table-wrapper custom-ant-table">
                <Table
                    columns={columns}
                    dataSource={filteredFaqs}
                    rowKey={record => record._id}
                    pagination={false}
                />
            </div>

            {/* Full view modal for FAQ details */}
            <Modal
                open={showFullModal}
                onCancel={() => setShowFullModal(false)}
                title={`❓ ${t("FAQ Details")}`}
                footer={[
                    <Button key="close" onClick={() => setShowFullModal(false)}>
                        {t("Close")}
                    </Button>,
                ]}
                centered
                width={700}
                scrollable
            >
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <strong>📁 {t("Category")}:</strong> {faqData?.category}
                    </div>
                </div>
                <div className="mb-3">
                    <strong>📝 {t("Question (English)")}:</strong>
                    <div
                        className="border rounded p-2 mt-1"
                        style={{ backgroundColor: "#f9f9f9" }}
                        dangerouslySetInnerHTML={{ __html: faqData?.question?.en }}
                    />
                </div>
                <div className="mb-3">
                    <strong>📝 {t("Question (Arabic)")}:</strong>
                    <div
                        className="border rounded p-2 mt-1"
                        style={{ backgroundColor: "#f9f9f9" }}
                        dangerouslySetInnerHTML={{ __html: faqData?.question?.ar }}
                    />
                </div>

                <div className="mb-3">
                    <strong>📝 {t("Answer (English)")}:</strong>
                    <div
                        className="border rounded p-2 mt-1"
                        style={{ backgroundColor: "#f9f9f9" }}
                        dangerouslySetInnerHTML={{ __html: faqData?.answer?.en }}
                    />
                </div>

                <div className="mb-3">
                    <strong>📝 {t("Answer (Arabic)")}:</strong>
                    <div
                        className="border rounded p-2 mt-1"
                        style={{ backgroundColor: "#f9f9f9" }}
                        dangerouslySetInnerHTML={{ __html: faqData?.answer?.ar }}
                    />
                </div>
            </Modal>

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
                    <p>{t("Are you sure you want to delete this faq?")}</p>
                </Modal>
            </div>

            {/* Create/Edit Faq Modal */}
            <Modal
                open={showModal}
                onCancel={handleClose}
                title={isEditing ? t('Edit FAQ') : t('Create FAQ')}
                footer={null}
                centered
                width={700}
            >
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                    form={form}
                    initialValues={{
                        question: { en: '', ar: '' },
                        answer: { en: '', ar: '' },
                        category: '',
                    }}
                >
                    <Form.Item
                        label={t("Question (English)")}
                        name={['question', 'en']}
                        rules={[{ required: true, message: 'Please input the English question!' }]}
                    >
                        <Input
                            value={faqData.question.en}
                            onChange={(e) => setFaqData({
                                ...faqData,
                                question: { ...faqData.question, en: e.target.value }
                            })}
                        />
                    </Form.Item>

                    <Form.Item
                        label={t("Question (Arabic)")}
                        name={['question', 'ar']}
                        rules={[{ required: true, message: 'Please input the Arabic question!' }]}
                    >
                        <Input
                            value={faqData.question.ar}
                            style={{ direction: 'rtl' }}
                            onChange={(e) => setFaqData({
                                ...faqData,
                                question: { ...faqData.question, ar: e.target.value }
                            })}
                        />
                    </Form.Item>

                    <Form.Item
                        label={t("Answer (English)")}
                        name={['answer', 'en']}
                        rules={[{ required: true, message: 'Please input the English answer!' }]}
                    >
                        <TextArea
                            rows={3}
                            value={faqData.answer.en}
                            onChange={(e) => setFaqData({
                                ...faqData,
                                answer: { ...faqData.answer, en: e.target.value }
                            })}
                        />
                    </Form.Item>

                    <Form.Item
                        label={t("Answer (Arabic)")}
                        name={['answer', 'ar']}
                        rules={[{ required: true, message: 'Please input the Arabic answer!' }]}
                    >
                        <TextArea
                            rows={3}
                            value={faqData.answer.ar}
                            style={{ direction: 'rtl' }}
                            onChange={(e) => setFaqData({
                                ...faqData,
                                answer: { ...faqData.answer, ar: e.target.value }
                            })}
                        />
                    </Form.Item>

                    <Form.Item
                        label={t("Category")}
                        name="category"
                        rules={[{ required: true, message: 'Please select a category!' }]}
                    >
                        <Select
                            placeholder={t("Select Category")}
                            onChange={(value) => setFaqData({ ...faqData, category: value })}
                        >
                            {categoryOptions.map((cat, idx) => (
                                <Option key={idx} value={cat}>
                                    {cat}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block>
                        {isEditing ? t("Update FAQ") : t("Create FAQ")}
                    </Button>
                </Form>
            </Modal>
        </div>
    );
};

export default FAQ;
