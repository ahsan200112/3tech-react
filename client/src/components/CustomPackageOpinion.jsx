import React from 'react';
import { useTranslation } from 'react-i18next';
import CallImg from "../assets/images/call.svg";
import LocationImg from "../assets/images/Location.svg";
import EmailImg from "../assets/images/Email.png";
import { useForm } from 'react-hook-form';

const CustomPackageOpinion = () => {
    const { t } = useTranslation();
    const isRTL = document.dir === "rtl"; // Ya kisi global state se lein
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

   /* const onSubmit = (data) => {
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(
            `Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Message: ${data.message}`
        );
    
        window.location.href = `mailto:ahsan200112@gmail.com?subject=${subject}&body=${body}`;
    }; */

    return (
        <section className='u-section'>
            <div className="container py-5">
                <div className="mb-4">
                    <button className="u-easy btn-sm">{t('Custom Package Option')}</button>
                    <h2 className="v-r mt-3" style={{ maxWidth: "800px", wordBreak: "break-word" }}>{t('Didn’t Find What You Need? Let’s Build A Custom Package Just For You!')}</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 custom-form-padding">
                        <div className="contact-info mb-4">
                            <div className="d-flex align-items-center">
                                <img src={EmailImg} alt="Company Logo" className="img-fluid" style={{ width: "35px", height: "33px" }} />
                                <div className={isRTL ? "me-2" : "ms-2"}>
                                    <h6 className="h-o mb-0">{t('Email')}</h6>
                                    <p className="h-k mb-0">Info@3tech.Sa</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info mb-4">
                            <div className="d-flex align-items-center">
                                <img src={CallImg} alt="Company Logo" className="img-fluid" style={{ width: "35px", height: "33px" }} />
                                <div className={isRTL ? "me-2" : "ms-2"}>
                                    <h6 className="h-o mb-0">{t('Call Us On')}</h6>
                                    <p className="h-k mb-0"> {t("+966557122917")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="d-flex align-items-center">
                                <img src={LocationImg} alt="Company Logo" className="img-fluid" style={{ width: "35px", height: "33px" }} />
                                <div className={isRTL ? "me-2" : "ms-2"}>
                                    <h6 className="h-o">{t('Location')}</h6>
                                    <p className="h-k">{t('Saudi Arabia (KSA)')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
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
                                    <button type="submit" className="btn-while py-2" style={{ width: "260px" }}>
                                        {t('Request a Custom Package')}
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

export default CustomPackageOpinion;
