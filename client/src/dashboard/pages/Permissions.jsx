// pages/Permissions.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPermissions,
  updateRolePermissions,
  togglePermission,
} from '../../redux/features/permissions/permissionsSlice';

const Permissions = ({ role, onClose }) => {
  const dispatch = useDispatch();
  const {
    modules,
    actions,
    permissions,
    loading,
    error
  } = useSelector((state) => state.permissions);

  useEffect(() => {
    if (role?._id) {
      dispatch(fetchPermissions(role._id));
    }
  }, [role, dispatch]);

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
    })).then(() => onClose());
  };

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
        <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
        {role.name !== 'Super Admin' && (
          <button className="btn btn-primary" onClick={handleUpdate}>Update Permissions</button>
        )}
      </div>
    </div>
  );
};

export default Permissions;
