import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRoles,
  addRole,
  editRole,
  removeRole,
} from '../../redux/features/roles/rolesSlice';
import { useTranslation } from 'react-i18next';
import usePermission from '../../hooks/usePermission';
import { Table, Button, Modal, Input, Popconfirm, message } from "antd";
import { PlusOutlined } from '@ant-design/icons';

const Roles = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { roles } = useSelector((state) => state.roles);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [roleName, setRoleName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [roleIdToEdit, setRoleIdToEdit] = useState('');

  const { canCreate, canEdit, canDelete } = usePermission("Roles");

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);


  const handleCreateRole = () => {
    if (!roleName.trim()) {
      message.warning(t("Please enter a role name"));
      return;
    };
    dispatch(addRole({ name: roleName })).then(() => {
      setShowModal(false);
      setRoleName('');
      dispatch(fetchRoles());
    });
  };

  const handleUpdateRole = () => {
    if (!roleName.trim()) {
      message.warning(t("Please enter a role name"));
      return;
    }
    dispatch(editRole({ id: roleIdToEdit, name: roleName })).then(() => {
      setShowModal(false);
      setRoleName('');
      setIsEditing(false);
      setRoleIdToEdit('');
      dispatch(fetchRoles());
    });
  };

  const handleDeleteRole = (id) => {
    dispatch(removeRole(id)).then(() => {
      if (selectedRole && selectedRole._id === id) {
        setSelectedRole(null);
      }
      dispatch(fetchRoles());
      message.success(t("Role deleted successfully"));
    });
  };

  const handleEditRole = (role) => {
    setRoleName(role.name);
    setIsEditing(true);
    setRoleIdToEdit(role._id);
    setShowModal(true);
  };

  const handlePermissionClick = (role) => {
    navigate(`/dashboard/roles-permissions/${role._id}`, { state: { role } });
  };

  const columns = [
    {
      title: t("Role Name"),
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: t("Created At"),
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: t("Actions"),
      key: "actions",
      render: (_, role) => (
        <>
          {role.name !== "Super Admin" && (
            <>
              {canEdit && (
                <Button
                  type="primary"
                  size="medium"
                  onClick={() => handleEditRole(role)}
                  style={{ marginRight: 4, marginLeft: 4 }}
                  icon={<i className="fa fa-edit" />}
                >
                  {t("Edit")}
                </Button>
              )}
              {canDelete && (
                <Popconfirm
                  title={t("Are you sure you want to delete this role?")}
                  onConfirm={() => handleDeleteRole(role._id)}
                  okText={t("Yes")}
                  cancelText={t("No")}
                >
                  <Button
                    type="primary"
                    danger
                    size="medium"
                    style={{ marginRight: 4, marginLeft: 4 }}
                    icon={<i className="fa fa-trash" />}
                  >
                    {t("Delete")}
                  </Button>
                </Popconfirm>
              )}
            </>
          )}
          <Button
            type="primary"
            size="medium"
            style={{ marginRight: 4, marginLeft: 4 }}
            onClick={() => handlePermissionClick(role)}
            icon={<i className="fa fa-shield" />}
          >
            {t("Permissions")}
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{t("Roles Management")}</h2>
        {canCreate && (
          <Button type="primary"
            icon={<PlusOutlined />}
            onClick={() => setShowModal(true)}>{t("Add Role")}</Button>
        )}
      </div>

      <div className="ant-table-wrapper custom-ant-table">
        <Table
          columns={columns}
          dataSource={roles.map((role) => ({ ...role, key: role._id }))}
          pagination={false}
        />
      </div>

      <Modal
        title={isEditing ? t("Edit Role") : t("Create Role")}
        open={showModal}
        onCancel={() => {
          setShowModal(false);
          setRoleName("");
          setIsEditing(false);
          setRoleIdToEdit("");
        }}
        onOk={isEditing ? handleUpdateRole : handleCreateRole}
        okText={isEditing ? t("Update Role") : t("Create Role")}
        cancelText={t("Cancel")}
      >
        <Input
          placeholder={t("Enter role name")}
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default Roles;
