import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

const GetContactNow2 = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://backend.3tech.sa/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                reset(); // Reset form after successful submission
            } else {
                alert('Something went wrong, please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form, please try again.');
        }
    };

    return (
        <section className='u-section'>
            <div className="container py-5">
                <div className="mb-4">
                    <button className="btn-sm u-vise">
                        {t('Get Contact Now')}
                    </button>
                    <h2 className="v-r mt-3">{t("Let's Bring Your Vision Into Reality")}</h2>
                    <p className="b-c">{t("Your email address will not be published. Required fields are marked *")}</p>
                </div>
                {/* Full-width Form */}
                <div className="row">
                    <div className="col-md-12"> {/* Wider Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row g-3">
                                <div className="col-lg-6">
                                    <label htmlFor="name" className="form-label text-primary-color">{t('Name')} *</label>
                                    <input
                                        type="text"
                                        className="form-control bg-transparent text-primary-color"
                                        id="name"
                                        {...register('name', { required: true })}
                                    />
                                    {errors.name && <span className="text-danger">Name is required</span>}
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="email" className="form-label text-primary-color">{t('Email')} *</label>
                                    <input
                                        type="email"
                                        className="form-control bg-transparent text-primary-color"
                                        id="email"
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && <span className="text-danger">Email is required</span>}
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="phone" className="form-label text-primary-color">{t('Phone')} *</label>
                                    <input
                                        type="text"
                                        className="form-control bg-transparent text-primary-color"
                                        id="phone"
                                        {...register('phone', { required: true })}
                                    />
                                    {errors.phone && <span className="text-danger">Phone is required</span>}
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="subject" className="form-label text-primary-color">{t('Subject')} *</label>
                                    <input
                                        type="text"
                                        className="form-control bg-transparent text-primary-color"
                                        id="subject"
                                        {...register('subject', { required: true })}
                                    />
                                    {errors.subject && <span className="text-danger">Subject is required</span>}
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <label htmlFor="message" className="form-label text-primary-color">{t('Message')} *</label>
                                    <textarea
                                        className="form-control bg-transparent text-primary-color"
                                        id="message"
                                        rows="3"
                                        {...register('message', { required: true })}
                                    ></textarea>
                                    {errors.message && <span className="text-danger">Message is required</span>}
                                </div>
                                <div className="col-lg-12 mt-3 custom-text-center">
                                    <button type="submit" className="btn-while px-5 py-2">
                                        {t('Send Now')}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetContactNow2;
