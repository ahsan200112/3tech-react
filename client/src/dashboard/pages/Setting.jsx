import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, updateCurrentUser, updatePassword } from '../../features/user/userSlice';
import { Button, Form, Container, Spinner, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Setting = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        phoneNo: '',
    });

    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                userName: user.userName || '',
                email: user.email || '',
                phoneNo: user.phoneNo || '',
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCurrentUser(formData)).then((res) => {
            if (!res.error) {
                Swal.fire({
                    icon: 'success',
                    title: 'Updated!',
                    text: 'Settings updated successfully.',
                    timer: 1000,
                    showConfirmButton: false
                }).then(() => {
                    window.location.reload(); // refresh page
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: res.error.message || 'Something went wrong!'
                });
            }
        });
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            Swal.fire({
                icon: 'warning',
                title: 'Mismatch!',
                text: 'New password and confirm password do not match!'
            });
            return;
        }

        dispatch(updatePassword(passwordData)).then((res) => {
            if (!res.error) {
                Swal.fire({
                    icon: 'success',
                    title: 'Password Changed!',
                    text: 'Your password has been updated successfully.',
                    timer: 1000,
                    showConfirmButton: false
                });
                setPasswordData({
                    oldPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: res.error.message || 'Failed to update password.'
                });
            }
        });
    };

    return (
        <Container className="mt-5">
            <h2>Settings</h2>
            {loading ? (
                <div className="text-center my-3">
                    <Spinner animation="border" />
                </div>
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <>
                    {/* User Info Form */}
                    <Form onSubmit={handleSubmit}>
                        <h4 className="mb-3">User Information</h4>
                        {['firstName', 'lastName', 'userName', 'email', 'phoneNo'].map((field) => (
                            <Form.Group className="mb-3" key={field}>
                                <Form.Label>{field.replace(/([A-Z])/g, ' $1')}</Form.Label>
                                <Form.Control
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        ))}
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Updating...' : 'Save Changes'}
                        </Button>
                    </Form>

                    {/* Password Change Form */}
                    <Form onSubmit={handlePasswordSubmit} className="mt-5">
                        <h4 className="mb-3">Change Password</h4>
                        <Form.Group className="mb-3">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="oldPassword"
                                value={passwordData.oldPassword}
                                onChange={handlePasswordChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPassword"
                                value={passwordData.newPassword}
                                onChange={handlePasswordChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={passwordData.confirmPassword}
                                onChange={handlePasswordChange}
                            />
                        </Form.Group>
                        <Button type="submit" variant="warning" disabled={loading}>
                            {loading ? 'Updating...' : 'Change Password'}
                        </Button>
                    </Form>
                </>
            )}
        </Container>
    );
};

export default Setting;
