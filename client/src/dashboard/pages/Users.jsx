import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import { getUsers, createUser, updateUser, deleteUser, getRoles } from '../../api/apiEndpoints';
import { Button, Table, Modal, Form, Input, Select, message } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import usePermission from '../../hooks/usePermission';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const Users = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const { canCreate, canEdit, canDelete } = usePermission("Users");

  const fetchUser = async () => {
    try {
      const res = await api.get(getUsers);
      //console.log('Fetched Users:', res.data); // 👈 Add this
      setUsers(res.data);
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  const fetchRoles = async () => {
    try {
      const res = await api.get(getRoles); // <-- replace with actual endpoint if different
      setRoles(res.data);
    } catch (err) {
      console.error("Error fetching roles", err);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchRoles();
  }, []);

  const resetForm = () => {
    setUserData({
      firstName: '',
      lastName: '',
      phoneNo: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    });
    setIsEditing(false);
  };

  const openModal = () => setVisible(true);
  const closeModal = () => {
    setVisible(false);
    resetForm();
  };

  const handleSubmit = async () => {
    if (userData.password !== userData.confirmPassword) {
      message.error(t("Passwords do not match"));
      return;
    }

    try {
      if (isEditing) {
        await api.put(updateUser(userData._id), userData);
        message.success(t('User updated successfully'));
      } else {
        const { confirmPassword, ...submitData } = userData;
        await api.post(createUser, submitData);
        message.success(t('User created successfully'));
      }
      closeModal();
      fetchUser();
    } catch (error) {
      message.error(t('Something went wrong'));
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    setUserData({
      _id: user._id,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      phoneNo: user.phoneNo || '',
      email: user.email || '',
      password: user.password || '', // ⚠️ only if backend provides hashed/plain password
      confirmPassword: user.password || '',
      role: user.role?._id || '', // ✅ ensure role is an ID
    });
    setIsEditing(true);
    openModal();
  };

  // Delete handler
  const handleDelete = (id) => {
    setSelectedDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await api.delete(deleteUser(selectedDeleteId));
      message.success(t("User deleted successfully"));
      fetchUser();
    } catch (error) {
      message.error(t("Failed to delete user"));
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

  // Columns for Ant Design Table
  const columns = [
    {
      title: t('First Name'),
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: t('Last Name'),
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: t('Phone No'),
      dataIndex: 'phoneNo',
      key: 'phoneNo',
    },
    {
      title: t('Email'),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: t('Role'),
      dataIndex: ['role', 'name'],
      key: 'role',
      render: (text) => text || t('No role assigned'),
    },
    {
      title: t('Date'),
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: t('Actions'),
      key: 'actions',
      render: (_, record) =>
        record.role?.name !== 'Super Admin' ? (
          <>
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
                onClick={() => handleDelete(record._id)}
              />
            )}
          </>
        ) : (
          <>
            <Button style={{ marginRight: 4, marginLeft: 4 }} icon={<EditOutlined />} disabled />
            <Button style={{ marginRight: 4, marginLeft: 4 }} danger icon={<DeleteOutlined />} disabled />
          </>
        ),
    },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-sm-center mb-4 flex-column flex-sm-row align-items-start">
        <h2 className="mb-2 mb-sm-0">{t("User Management")}</h2>
        {canCreate && (
          <Button type="primary" onClick={openModal} icon={<PlusOutlined />} className="w-sm-auto">
            {t("Add New User")}
          </Button>
        )}
      </div>

      <div className="ant-table-wrapper custom-ant-table">
        <Table
          columns={columns}
          dataSource={users}
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
          <p>{t("Are you sure you want to delete this user?")}</p>
        </Modal>
      </div>

      <div>
        <Modal
          title={isEditing ? t('Edit User') : t('Create User')}
          open={visible}
          onOk={handleSubmit}
          onCancel={closeModal}
          okText={isEditing ? t('Update') : t('Create')}
          destroyOnHidden
          width={800}
          centered
        >
          <div style={{ marginBottom: "20px" }}>
          </div>
          <Form
            layout="vertical"
            initialValues={userData}
            onFinish={handleSubmit}
            onValuesChange={(changedValues) =>
              setUserData(prev => ({ ...prev, ...changedValues }))
            }
          >
            <Form.Item
              label={t("First Name")}
              name="firstName"
              rules={[{ required: true, message: t('Please input first name') }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t("Last Name")}
              name="lastName"
              rules={[{ required: true, message: t('Please input last name') }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t("Phone Number")}
              name="phoneNo"
              rules={[{ required: true, message: t('Please input phone number') }]}
            >
              <Input type="tel" />
            </Form.Item>

            <Form.Item
              label={t("Email")}
              name="email"
              rules={[
                { required: true, message: t('Please input email') },
                { type: 'email', message: t('Please enter a valid email') },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t("Password")}
              name="password"
              rules={isEditing ? [] : [{ required: true, message: t('Please input password') }]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label={t("Confirm Password")}
              name="confirmPassword"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: !isEditing, message: t('Please confirm password') },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error(t('Passwords do not match')));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label={t("Role")}
              name="role"
              rules={[{ required: true, message: t('Please select a role') }]}
            >
              <Select placeholder={t("Select Role")}>
                {roles
                  .filter(role => role.name !== 'Super Admin')
                  .map(role => (
                    <Option key={role._id} value={role._id}>
                      {role.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Users;
