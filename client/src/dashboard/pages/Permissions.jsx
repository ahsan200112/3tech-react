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

const Permissions = () => {
  const { i18n } = useTranslation();
  const RTL = i18n.dir() === "rtl";
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
  } = useSelector((state) => state.permissions);

  useEffect(() => {
    if (!role) {
      navigate('/dashboard/roles-permissions'); // Redirect back if role is not provided
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
    })).then((res) => {
      // Show success alert when update completes
      Swal.fire({
        icon: 'success',
        title: 'Permissions Updated',
        text: 'Role permissions have been successfully updated.',
        confirmButtonColor: '#3085d6',
      });
    }).catch((err) => {
      // Optionally handle error
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'Something went wrong while updating permissions.',
      });
    });
  };

  if (!role) return null;

  return (
    <div className="border rounded p-4 shadow-sm bg-light">
      <h4 className="mb-3">Permissions for: <strong>{role.name}</strong></h4>

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <div>Loading permissions...</div>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Module</th>
              {actions.map((action) => (
                <th key={action} className="text-center text-capitalize">
                  {action === 'all' ? 'Allow All' : action}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {modules.map((module) => (
              <tr key={module}>
                <td>{module}</td>
                {actions.map((action) => (
                  <td key={action} className="text-center">
                    <input
                      type="checkbox"
                      checked={permissions[module]?.[action] || false}
                      onChange={() => handleToggle(module, action)}
                      disabled={role.name === 'Super Admin'}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="d-flex justify-content-end mt-3">
        <button className={`${RTL ? 'ms-2' : 'me-2'} btn btn-secondary `} onClick={() => navigate('/dashboard/roles-permissions')}>Back</button>
        <button className={`${RTL ? 'ms-2' : 'me-2'} btn btn-secondary`} onClick={() => navigate('/dashboard/roles-permissions')}>Cancel</button>
        {role.name !== 'Super Admin' && (
          <button className="btn btn-primary" onClick={handleUpdate}>Update Permissions</button>
        )}
      </div>
    </div>
  );
};

export default Permissions;
