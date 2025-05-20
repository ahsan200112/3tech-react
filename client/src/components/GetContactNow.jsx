import React from 'react';
import { useTranslation } from 'react-i18next';
import CallImg from "../assets/images/call.svg";
//import LocationImg from "../assets/images/Location.svg";
import EmailImg from "../assets/images/Email.png";
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
//import { useNavigate } from 'react-router-dom';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';
//import api from '../api/api';
//import { createContactForm } from '../api/apiEndpoints';
import { FaMapMarkerAlt } from 'react-icons/fa';

const GetContactNow = () => {
    const { t } = useTranslation();
    const isRTL = document.dir === "rtl"; // Ya kisi global state se lein
    //const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    //const navigate = useNavigate();
    const trackEvent = useGTMEventTracker();

    // ye node js backend ke sath hai api already bani hui hai
    /*
    const onSubmit = async (data) => {
        try {
            const response = await api.post(createContactForm, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200 || response.status === 201) {
                reset(); // Reset form after successful submission
                //navigate('/thankyou');
                window.location.href = '/thankyou';
                // Push the form submission event to GTM with page path
                if (window.dataLayer) {
                    window.dataLayer.push({
                        event: 'form_submission',  // Custom event name
                        form_name: 'ContactUs',  // Form name or identifier
                        page: window.location.pathname,  // Page URL (path)
                        form_data: {
                            name: data.name,
                            email: data.email,
                            phone: data.phone,
                            subject: data.subject,
                            message: data.message
                        }
                    });
                }
            } else {
                alert('Something went wrong, please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form, please try again.');
        }
    }; */

    //ye emailjs hai jo frontend se email send krta hai ye 200 free email hai per month baqi ye paid
    const onSubmit = (data) => {
        const serviceID = "service_bk2mmlr";  // EmailJS se copy karo
        const templateID = "template_ij5qjqm";  // EmailJS se copy karo
        const publicKey = "rBuu6w3lR4LQIztjf";  // EmailJS se copy karo

        const templateParams = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                reset();
                //navigate('/thankyou');
                window.location.href = '/thankyou';
                // Push the form submission event to GTM with page path
                if (window.dataLayer) {
                    window.dataLayer.push({
                        event: 'form_submission',  // Custom event name
                        form_name: 'ContactUs',  // Form name or identifier
                        page: window.location.pathname,  // Page URL (path)
                        form_data: {
                            name: data.name,
                            email: data.email,
                            phone: data.phone,
                            subject: data.subject,
                            message: data.message
                        }
                    });
                }
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("Failed to send email, please try again.");
            });
    };

    return (
        <section className='u-section'>
            <div className="container py-5" data-aos="fade-up" data-aos-delay="500">
                <div className="mb-4">
                    <h3 className="u-vise" style={{ width: "170px" }}>{t("Get Contact Now")}</h3>
                    <h2 className="v-r mt-3">{t("Let’s Create Something Remarkable Together.")}</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 custom-form-padding">
                        <div className="contact-info mb-4">
                            <div className="d-flex align-items-center">
                                <img src={EmailImg} alt={t("Company Logo")} className="img-fluid" style={{ width: "35px", height: "33px" }} />
                                <div className={isRTL ? "me-2" : "ms-2"}>
                                    <a
                                        href="mailto:info@3tech.sa"
                                        className="text-decoration-none"
                                        onClick={() => trackEvent('click on email link', 'Contact', 'Click', 'Email Link')}
                                    >
                                        <h6 className="h-o mb-0">{t("Email")}</h6>
                                        <p className="h-k mb-0">info@3tech.sa</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info mb-4">
                            <div className="d-flex align-items-center">
                                <img src={CallImg} alt={t("Company Logo")} className="img-fluid" style={{ width: "35px", height: "33px" }} />
                                <div className={isRTL ? "me-2" : "ms-2"}>
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=966557122917" target='blank'
                                        className='text-decoration-none'
                                        onClick={() => trackEvent('click on phone link', 'Contact', 'Click', 'Phone Link')}
                                    >
                                        <h6 className="h-o mb-0">{t("Call Us On")}</h6>
                                        <p className="h-k mb-0">{t("+966557122917")}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="d-flex align-items-center">
                                {/*<img src={LocationImg} alt={t("Company Logo")} className="img-fluid" style={{ width: "35px", height: "33px" }} /> */}
                                <FaMapMarkerAlt size={26} color="#3b9be9" />
                                <div className={isRTL ? "me-2" : "ms-2"}>
                                    <a
                                        href="https://maps.app.goo.gl/b3KDbQz5Ea1u4wuH9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none"
                                    >
                                        <h6 className="h-o mb-0">{t("Location")}</h6>
                                        <p className="h-k mb-0">{t("Saudi Arabia (KSA)")}</p>
                                    </a>
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
                                    <button type="submit" className="btn-while px-4 py-2"
                                        onClick={() => trackEvent('click on submit button', 'Submit Form', 'Click', 'contact us form button')}
                                    >
                                        {t("Send Now")}
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

export default GetContactNow;

