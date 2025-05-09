import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { getUsers, createUser, updateUser, deleteUser, getRoles } from '../../api/apiEndpoints';
import { FaEdit, FaTrash } from 'react-icons/fa';
import usePermission from '../../hooks/usePermission';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const { canCreate, canEdit, canDelete } = usePermission("Users");

  const fetchUser = async () => {
    try {
      const res = await api.get(getUsers);
      console.log('Fetched Users:', res.data); // 👈 Add this
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

  const handleClose = () => {
    setShow(false);
    setIsEditing(false);
    setUserData({
      firstName: '',
      lastName: '',
      phoneNo: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    });
  };

  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (isEditing) {
      await api.put(updateUser(userData._id), userData);
    } else {
      const { confirmPassword, ...submitData } = userData;
      await api.post(createUser, submitData);
    }
    handleClose();
    fetchUser();
  };

  const handleEdit = (user) => {
    setUserData({
      _id: user._id,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      phoneNo: user.phoneNo || '',
      userName: user.userName || '',
      email: user.email || '',
      password: user.password || '', // ⚠️ only if backend provides hashed/plain password
      confirmPassword: user.password || '',
      role: user.role?._id || '', // ✅ ensure role is an ID
    });
    setIsEditing(true);
    handleShow();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await api.delete(deleteUser(id));
      fetchUser();
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>User Management</h2>
        {canCreate && (
          <Button variant="primary" onClick={handleShow}>Add New User</Button>
        )}
      </div>
      <Table bordered hover responsive className="custom-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Date</th>
            {/* <th>Actions</th> */}
            {users.some(user => user.role?.name !== 'Super Admin') && (
              <th>Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td style={{ width: "100px" }}>{user.firstName}</td>
              <td style={{ width: "100px" }}>{user.lastName}</td>
              <td style={{ width: "140px" }}>{user.phoneNo}</td>
              <td style={{ width: "100px" }}>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.role ? user.role.name : 'No role assigned'}</td> {/* Displaying role name */}
              {/*<td>{new Date(faq.date).toLocaleDateString()}</td>*/}
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              {/* <td>
                <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(user)}><FaEdit /></Button>
                <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(user._id)}><FaTrash /></Button>
              </td> */}
              {user.role?.name !== 'Super Admin' && (
                <td>
                  <>
                    {canEdit && (
                      <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(user)}><FaEdit /></Button>
                    )}
                    {canDelete && (
                      <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(user._id)}><FaTrash /></Button>
                    )}
                  </>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Create/Edit Faq Modal */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit User' : 'Create User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={userData.firstName}
                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={userData.lastName}
                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                value={userData.phoneNo}
                onChange={(e) => setUserData({ ...userData, phoneNo: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                value={userData.userName}
                onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                required={!isEditing}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={userData.confirmPassword}
                onChange={(e) =>
                  setUserData({ ...userData, confirmPassword: e.target.value })
                }
                required={!isEditing}
                isInvalid={
                  userData.confirmPassword && userData.password !== userData.confirmPassword
                }
              />
              <Form.Control.Feedback type="invalid">
                Passwords do not match
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                value={userData.role}
                onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                required
              >
                <option value="">Select Role</option>
                {/* {roles.map((role) => (
                  <option key={role._id} value={role._id}> 
                    {role.name} 
                  </option>
                ))} */}
                {roles
                  .filter(role => role.name !== 'Super Admin') // 👈 Filter out Super Admin
                  .map((role) => (
                    <option key={role._id} value={role._id}>
                      {role.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>

            <Button type="submit" variant="success">{isEditing ? 'Update' : 'Create'}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Users;
