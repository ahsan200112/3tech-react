import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../../api/apiEndpoints';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { UploadOutlined, EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import usePermission from '../../hooks/usePermission';
import { useTranslation } from 'react-i18next';

const { TextArea } = Input;

const Blogs = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [fullModalVisible, setFullModalVisible] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [blogData, setBlogData] = useState({
    title: { en: '', ar: '' },
    image: null,
    description: { en: '', ar: '' },
    author: { en: '', ar: '' },
    category: { en: '', ar: '' },
    _id: null,
  });

  const { canCreate, canEdit, canDelete } = usePermission("Blogs");

  const fetchBlogs = async () => {
    try {
      const res = await api.get(getBlogs);
      //console.log('Fetched blogs:', res.data); // 👈 Add this
      setBlogs(res.data);
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const resetForm = () => {
    setBlogData({
      title: { en: '', ar: '' },
      description: { en: '', ar: '' },
      author: { en: '', ar: '' },
      category: { en: '', ar: '' },
      _id: null,
    });
    setFileList([]);
    setIsEditing(false);
  };

  const handleModalClose = () => {
    resetForm();
    setModalVisible(false);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title[en]', blogData.title.en);
      formData.append('title[ar]', blogData.title.ar);
      formData.append('description[en]', blogData.description.en);
      formData.append('description[ar]', blogData.description.ar);
      formData.append('author[en]', blogData.author.en);
      formData.append('author[ar]', blogData.author.ar);
      formData.append('category[en]', blogData.category.en);
      formData.append('category[ar]', blogData.category.ar);
      if (fileList.length > 0) {
        if (fileList[0].originFileObj) {
          formData.append('image', fileList[0].originFileObj);
        } else if (fileList[0].url) {
          // Agar existing image URL backend ko bhejna ho
          formData.append('existingImage', fileList[0].url);
        }
      }
      if (isEditing) {
        await api.put(updateBlog(blogData._id), formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        message.success(t('Blog updated successfully'));
      } else {
        await api.post(createBlog, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        message.success(t('Blog created successfully'));
      }
      handleModalClose();
      fetchBlogs();
    } catch (error) {
      console.error(error);
      message.error(t('Failed to save blog'));
    }
  };


  const handleEdit = (blog) => {
    setBlogData(
      {
        title: { en: blog.title.en, ar: blog.title.ar },
        description: { en: blog.description.en, ar: blog.description.ar },
        author: { en: blog.author.en, ar: blog.author.ar },
        category: { en: blog.category.en, ar: blog.category.ar },
        _id: blog._id
      }
    );
    if (blog.image) {
      setFileList([
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: blog.image,
        },
      ]);
    } else {
      setFileList([]);
    }
    setIsEditing(true);
    setModalVisible(true);
  };
  // Delete handler
  const handleDelete = (id) => {
    setSelectedDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await api.delete(deleteBlog(selectedDeleteId));
      message.success(t("Blog deleted successfully"));
      fetchBlogs();
    } catch (error) {
      message.error(t("Failed to delete blog"));
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
      render: (img) => img ? <img src={img} alt="blog" style={{ height: 60, objectFit: 'cover' }} /> : '-',
    },
    {
      title: t('Category (Arabic)'),
      dataIndex: ['category', 'ar'],
      key: 'category_ar',
    },
    {
      title: t('Actions'),
      key: 'actions',
      width: 180,
      render: (_, record) => (
        <>
          <Button
            icon={<EyeOutlined />}
            style={{ marginRight: 4, marginLeft: 4 }}
            onClick={() => {
              setBlogData(record);
              setFullModalVisible(true);
            }}
          />
          {canEdit && (
            <Button
              icon={<EditOutlined />}
              style={{ marginRight: 4, marginLeft: 4 }}
              onClick={() => handleEdit(record)}
            />
          )}
          {canDelete && (
            <Button
              icon={<DeleteOutlined />}
              style={{ marginRight: 4, marginLeft: 4 }}
              danger
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
        <h2 className="mb-2 mb-sm-0">{t("Blog Management")}</h2>
        {canCreate && (
          <Button type="primary"
            icon={<PlusOutlined />}
            className="w-sm-auto"
            onClick={() => setModalVisible(true)}>{t("Add New Blog")}</Button>
        )}
      </div>
      <div className="ant-table-wrapper custom-ant-table">
        <Table
          columns={columns}
          dataSource={blogs}
          rowKey={record => record._id}
          pagination={false}
          scroll={{ x: 'max-content' }}
        />
      </div>

      {/* Full View Modal */}
      <Modal
        title={`📰 ${t("Blog Details")}`}
        open={fullModalVisible}
        onCancel={() => setFullModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setFullModalVisible(false)}>
            {t("Close")}
          </Button>
        ]}
        width={800}
        centered
        scrollable
      >
        <div style={{ marginBottom: "20px" }}></div>
        <div className="mb-3"><strong className="text-primary">📅 {t("Date")}:</strong> {blogData?.date ? new Date(blogData.date).toLocaleDateString() : '—'}</div>
        <div>
          <div className="row mb-3">
            <div className="col-md-6"><strong>📝 {t("Title (English)")}:</strong> {blogData?.title?.en}</div>
            <div className="col-md-6"><strong>📝 {t("Title (Arabic)")}:</strong> {blogData?.title?.ar}</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6"><strong>👤 {t("Author (English)")}:</strong> {blogData?.author?.en}</div>
            <div className="col-md-6"><strong>👤 {t("Author (Arabic)")}:</strong> {blogData?.author?.ar}</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6"><strong>📂 {t("Category (English)")}:</strong> {blogData?.category?.en}</div>
            <div className="col-md-6"><strong>📂 {t("Category (Arabic)")}:</strong> {blogData?.category?.ar}</div>
          </div>
        </div>
        <hr />
        <div className='mb-3'>
          <strong>📝 {t("Description (English)")}:</strong>
          <div
            className="border rounded p-2 mt-1"
            style={{ backgroundColor: "#f9f9f9" }}
            dangerouslySetInnerHTML={{ __html: blogData?.description?.en }}
          />
        </div>
        <div className='mb-3'>
          <strong>📝 {t("Description (Arabic)")}:</strong>
          <div
            className="border rounded p-2 mt-1"
            style={{ backgroundColor: "#f9f9f9" }}
            dangerouslySetInnerHTML={{ __html: blogData?.description?.ar }}
          />
        </div>
        {blogData.image && (
          <div>
            <strong>🖼️ {t("Blog Image")}:</strong>
            <div className='mb-2'>
              <img src={blogData.image} alt="Blog" style={{ maxWidth: '100%' }} />
            </div>
          </div>
        )}
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
          <p>{t("Are you sure you want to delete this blog?")}</p>
        </Modal>
      </div>

      {/* Create/Edit Modal */}
      <Modal
        title={isEditing ? t('Edit Blog') : t('Create Blog')}
        open={modalVisible}
        onCancel={handleModalClose}
        onOk={handleSubmit}
        okText={isEditing ? t('Update') : t('Create')}
        centered
        width={800}
      >
        <div style={{marginBottom:"20px"}}></div>
        <Form layout="vertical">
          <Form.Item label={t('Title (English)')} required>
            <Input
              value={blogData.title.en}
              onChange={(e) => setBlogData({ ...blogData, title: { ...blogData.title, en: e.target.value } })}
            />
          </Form.Item>
          <Form.Item label={t('Title (Arabic)')} required>
            <Input
              value={blogData.title.ar}
              style={{ direction: 'rtl' }}
              onChange={(e) => setBlogData({ ...blogData, title: { ...blogData.title, ar: e.target.value } })}
            />
          </Form.Item>

          <Form.Item label={t('Description (English)')} required>
            <TextArea
              rows={4}
              value={blogData.description.en}
              onChange={(e) => setBlogData({ ...blogData, description: { ...blogData.description, en: e.target.value } })}
            />
          </Form.Item>
          <Form.Item label={t('Description (Arabic)')} required>
            <TextArea
              rows={4}
              value={blogData.description.ar}
              style={{ direction: 'rtl' }}
              onChange={(e) => setBlogData({ ...blogData, description: { ...blogData.description, ar: e.target.value } })}
            />
          </Form.Item>

          <Form.Item label={t('Author (English)')} required>
            <Input
              value={blogData.author.en}
              onChange={(e) => setBlogData({ ...blogData, author: { ...blogData.author, en: e.target.value } })}
            />
          </Form.Item>
          <Form.Item label={t('Author (Arabic)')} required>
            <Input
              value={blogData.author.ar}
              style={{ direction: 'rtl' }}
              onChange={(e) => setBlogData({ ...blogData, author: { ...blogData.author, ar: e.target.value } })}
            />
          </Form.Item>

          <Form.Item label={t('Category (English)')} required>
            <Input
              value={blogData.category.en}
              onChange={(e) => setBlogData({ ...blogData, category: { ...blogData.category, en: e.target.value } })}
            />
          </Form.Item>
          <Form.Item label={t('Category (Arabic)')} required>
            <Input
              value={blogData.category.ar}
              style={{ direction: 'rtl' }}
              onChange={(e) => setBlogData({ ...blogData, category: { ...blogData.category, ar: e.target.value } })}
            />
          </Form.Item>

          {/* Image Upload */}
          <Form.Item label={t('Image')} required>
            <Upload
              listType="picture"
              maxCount={1}
              fileList={fileList}
              beforeUpload={() => false}  // Prevent auto upload
              onChange={({ fileList: newFileList }) => setFileList(newFileList)}
            >
              <Button icon={<UploadOutlined />}>{t("Upload Image")}</Button>
            </Upload>
          </Form.Item>

        </Form>
      </Modal>
    </div>
  );
};

export default Blogs;
