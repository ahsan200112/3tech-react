import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Permissions from './Permissions';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRoles,
  addRole,
  editRole,
  removeRole,
} from '../../redux/features/roles/rolesSlice';


const Roles = () => {
  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state.roles);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [roleName, setRoleName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [roleIdToEdit, setRoleIdToEdit] = useState('');

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);


  const handleCreateRole = () => {
    if (!roleName.trim()) return alert('Please enter a role name');
    dispatch(addRole({ name: roleName })).then(() => {
      setShowModal(false);
      setRoleName('');
      dispatch(fetchRoles());
    });
  };

  const handleUpdateRole = () => {
    if (!roleName.trim()) return alert('Please enter a role name');
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
    });
  };


  const handleEditRole = (role) => {
    setRoleName(role.name);
    setIsEditing(true);
    setRoleIdToEdit(role._id);
    setShowModal(true);
  };

  const handlePermissionClick = (role) => {
    setSelectedRole(role);
  };

  const handleClosePermissions = () => {
    setSelectedRole(null);
    dispatch(fetchRoles());
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Roles Management</h2>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Role</button>
      </div>

      {/* Role Creation or Update Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} aria-modal="true" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isEditing ? 'Edit Role' : 'Create Role'}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="roleName">Role Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="roleName"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    placeholder="Enter role name"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={isEditing ? handleUpdateRole : handleCreateRole}
                >
                  {isEditing ? 'Update Role' : 'Create Role'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Role Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role._id}>
              <td>{role.name}</td>
              <td>
                {/* <button className="btn btn-sm btn-danger me-2" onClick={() => handleDeleteRole(role._id)}>Delete</button>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditRole(role)}>Edit</button> */}
                {role.name !== 'Super Admin' && (
                  <>
                    <button className="btn btn-sm btn-danger me-2" onClick={() => handleDeleteRole(role._id)}>Delete</button>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditRole(role)}>Edit</button>
                  </>
                )}
                <button className="btn btn-sm btn-secondary" onClick={() => handlePermissionClick(role)}>
                  Permissions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRole && (
        <div className="mt-4">
          <Permissions role={selectedRole} onClose={handleClosePermissions} />
        </div>
      )}
    </div>
  );
};

export default Roles;
