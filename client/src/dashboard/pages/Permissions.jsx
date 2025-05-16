// pages/Permissions.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPermissions,
  updateRolePermissions,
  togglePermission,
  resetPermissions
} from '../../redux/features/permissions/permissionsSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

import { Table, Checkbox, Button, Spin, Alert } from 'antd';

const Permissions = () => {
  const { t, i18n } = useTranslation();
  const RTL = i18n.dir() === 'rtl';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const role = location.state?.role;

  const {
    modules,
    actions,
    permissions,
    loading,
    error
  } = useSelector(state => state.permissions);

  useEffect(() => {
    if (!role) {
      navigate('/dashboard/roles-permissions'); // Redirect if no role
      return;
    }
    dispatch(fetchPermissions(role._id));

    return () => {
      dispatch(resetPermissions());
    };
  }, [dispatch, role, navigate]);

  const handleToggle = (module, action) => {
    if (role.name === 'Super Admin') return;
    dispatch(togglePermission({ module, actionType: action }));
  };

  const handleUpdate = () => {
    const updatedPermissions = Object.entries(permissions).map(([module, actions]) => {
      const { all, ...filtered } = actions;
      return { module, actions: filtered };
    });

    dispatch(updateRolePermissions({
      roleId: role._id,
      permissions: updatedPermissions,
    })).then(() => {
      Swal.fire({
        icon: 'success',
        title: t('Permissions Updated'),
        text: t('Role permissions have been successfully updated.'),
        confirmButtonColor: '#3085d6',
      });
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: t('Update Failed'),
        text: t('Something went wrong while updating permissions.'),
      });
    });
  };

  if (!role) return null;

  // Ant Design Table Columns
  const columns = [
    {
      title: t('Module'),
      dataIndex: 'module',
      key: 'module',
      align: 'center',
      render: text => <strong>{text}</strong>
    },
    ...actions.map(action => ({
      title: action === 'all' ? t('Allow All') : t(action),
      dataIndex: action,
      key: action,
      width: 130,
      align: 'center',
      render: (checked, record) => (
        <Checkbox
          checked={checked}
          disabled={role.name === 'Super Admin'}
          onChange={() => handleToggle(record.module, action)}
        />
      ),
    })),
  ];

  // DataSource for Ant Design Table
  const dataSource = modules.map(module => {
    const rowPermissions = permissions[module] || {};
    return {
      key: module,
      module,
      ...actions.reduce((acc, action) => {
        acc[action] = !!rowPermissions[action];
        return acc;
      }, {}),
    };
  });

  return (
    <div className="border rounded p-4 shadow-sm bg-light" dir={RTL ? 'rtl' : 'ltr'}>
      <h4 className="mb-4">{t("Permissions for")}: <strong>{role.name}</strong></h4>

      {error && <Alert type="error" message={error} className="mb-3" />}

      {loading ? (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <Spin tip={t("Loading permissions")} />
        </div>
      ) : (
        <div className="ant-table-wrapper custom-ant-table">
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            scroll={{ x: 'max-content' }}
            bordered
            size="middle"
          />
        </div>
      )}

      <div className={`d-flex justify-content-end mt-3 ${RTL ? 'flex-row-reverse' : ''}`}>
        <Button
          className={RTL ? 'ms-2' : 'me-2'}
          onClick={() => navigate('/dashboard/roles-permissions')}
        >
          {t("Back")}
        </Button>
        <Button
          className={RTL ? 'ms-2' : 'me-2'}
          onClick={() => navigate('/dashboard/roles-permissions')}
        >
          {t("Cancel")}
        </Button>
        {role.name !== 'Super Admin' && (
          <Button type="primary" onClick={handleUpdate}>
            {t("Update Permissions")}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Permissions;
