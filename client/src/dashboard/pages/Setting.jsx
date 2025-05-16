import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, updateCurrentUser, updatePassword } from '../../redux/features/users/usersSlice';
import { Button, Form, Container, Spinner, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const Setting = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        <Container className="py-4">
            <h2 className='mb-4'>{t("Settings")}</h2>
            {loading ? (
                <div className="text-center my-3">
                    <Spinner animation="border" />
                </div>
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <>
                    {/* User Info Form */}
                    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
                        <Form onSubmit={handleSubmit}>
                            <h4 className="mb-3">{t("User Information")}</h4>

                            <Form.Group as={Form.Row} className="mb-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Label>{t("First Name")}</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label>{t("Last Name")}</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group as={Form.Row} className="mb-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Label>{t("Email")}</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label>{t("Phone No")}</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="phoneNo"
                                            value={formData.phoneNo}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </Form.Group>

                            <Button type="submit" disabled={loading}>
                                {loading ? t('Updating...') : t('Save Changes')}
                            </Button>
                        </Form>
                    </div>


                    {/* Password Change Form */}
                    <div className="mt-3" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
                        <Form onSubmit={handlePasswordSubmit}>
                            <h4 className="mb-3">{t("Change Password")}</h4>
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Label>{t("Old Password")}</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="oldPassword"
                                            value={passwordData.oldPassword}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label>{t("New Password")}</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="newPassword"
                                            value={passwordData.newPassword}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Label>{t("Confirm New Password")}</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="confirmPassword"
                                            value={passwordData.confirmPassword}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </div>
                            </Form.Group>
                            <Button type="submit" variant="warning" disabled={loading}>
                                {loading ? t('Updating...') : t('Change Password')}
                            </Button>
                        </Form>
                    </div >
                </>
            )}
        </Container >
    );
};

export default Setting;
