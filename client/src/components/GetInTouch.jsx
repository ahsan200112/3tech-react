import React from 'react';
import { useTranslation } from 'react-i18next';
//import FraImg from '../assets/images/fra.png';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const GetInTouch = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    const trackEvent = useGTMEventTracker();  // Use the custom hook

    return (
        <section className="v-section py-5">
            <div className="container py-5" data-aos="fade-up" data-aos-delay="200">
                <div>
                    <h3 className="u-vise mb-2" style={{ width: "165px" }}>{t("Get in Touch")}</h3>
                    <h2 className="b-b">{t("Need Further Assistance?")}</h2>
                    <p className="b-c">{t("Have a question, feedback, or just want to say hello? We’d love to hear from you!")}</p>
                    {/*<img src={FraImg} alt="Company Logo" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} /> */}
                    <div>
                        <iframe
                            title="Google Map Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.562292158156!2d39.18257630000001!3d21.603002200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cf33cbead32b%3A0xf411ea54c61219ed!2zM3RlY2ggfCDYq9ix2Yog2KrZgw!5e0!3m2!1sen!2s!4v1744374582531!5m2!1sen!2s"
                            width="100%"
                            height="320"
                            style={{ border: 0, borderRadius: "15px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            onClick={() => trackEvent('click on map(3tech)', 'Contact', 'Click', 'Map link(3tech)')}
                        >
                        </iframe>
                    </div>
                    <div className="row mt-3 text-center">
                        <div className="col-md-3 position-relative">
                            <a
                                href="https://maps.app.goo.gl/b3KDbQz5Ea1u4wuH9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                <p className="b-e">{t("Location")}</p>
                                <h2 className="b-d">{t("Jeddah - Al Makarunah Rd")}</h2>
                            </a>
                            <div className="border-line"></div>
                        </div>
                        <div className="col-md-3 position-relative">
                            <a href="mailto:info@3tech.sa" className="text-white text-decoration-none"
                                onClick={() => trackEvent('click on email address link', 'Contact', 'Click', 'Email Address Link')}
                            >
                                <p className="b-e">{t("Email")}</p>
                                <h2 className="b-d">info@3tech.sa</h2>
                            </a>
                            <div className="border-line"></div>
                        </div>
                        <div className="col-md-3 position-relative">
                            <a href="https://api.whatsapp.com/send/?phone=966557122917" target='blank'
                                className="text-white text-decoration-none"
                                onClick={() => trackEvent('click on phone number link', 'Contact', 'Click', 'Phone Number Link')}
                            >
                                <p className="b-e">{t("Phone")}</p>
                                <h2 className="b-d"> {t("+966557122917")} </h2>
                            </a>
                            <div className="border-line"></div>
                        </div>
                        <div className="col-md-3">
                            <p className="b-e">{t("Social")}</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <a href="https://www.linkedin.com/company/3tech-platform" target='blank'
                                    onClick={() => trackEvent('click on social medialink', 'Social Media', 'Click', 'LinkedIn link')}
                                ><i className="bi bi-linkedin mx-2" style={{color:"var(--text-primary)"}}></i></a>
                                <a href="https://api.whatsapp.com/send/?phone=966557122917" target='blank'
                                    onClick={() => trackEvent('click on social media link', 'Social Media', 'Click', 'WhatsApp Link')}
                                ><i className="bi bi-whatsapp mx-2" style={{color:"var(--text-primary)"}}></i></a>
                                <a href="https://www.instagram.com/3tech.sa?igsh=aW14cDY0cmtvZW9p" target='blank'
                                    onClick={() => trackEvent('click on social media link', 'Social Media', 'Click', 'Instagram Link')}
                                ><i className="bi bi-instagram mx-2" style={{color:"var(--text-primary)"}}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;

