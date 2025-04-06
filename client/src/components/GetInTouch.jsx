import React from 'react';
import { useTranslation } from 'react-i18next';
import FraImg from '../assets/images/fra.png';

const GetInTouch = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="v-section py-5">
            <div className="container py-5" data-aos="fade-up" data-aos-delay="600">
                <div>
                    <button className="btn-sm u-vise mb-2">{t("Get in Touch")}</button>
                    <h2 className="b-b">{t("Need Further Assistance?")}</h2>
                    <p className="b-c">{t("Have a question, feedback, or just want to say hello? We’d love to hear from you!")}</p>
                    <img src={FraImg} alt="Company Logo" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
                    <div className="row mt-3 text-center">
                        <div className="col-md-3 position-relative">
                            <p className="b-e">{t("Location")}</p>
                            <h2 className="b-d">{t("Saudi Arabia (KSA)")}</h2>
                            <div className="border-line"></div>
                        </div>
                        <div className="col-md-3 position-relative">
                            <p className="b-e">{t("Email")}</p>
                            <h2 className="b-d">info@3tech.sa</h2>
                            <div className="border-line"></div>
                        </div>
                        <div className="col-md-3 position-relative">
                            <p className="b-e">{t("Phone")}</p>
                            <h2 className="b-d">{t("+966557122917")}</h2>
                            <div className="border-line"></div>
                        </div>
                        <div className="col-md-3">
                            <p className="b-e">{t("Social")}</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <i href="https://www.linkedin.com/company/3tech-platform" target='blank' className="bi bi-linkedin text-white mx-2"></i>
                                <i href="https://api.whatsapp.com/send/?phone=966557122917" target='blank' className="bi bi-whatsapp text-white mx-2"></i>
                                <i href="https://www.instagram.com/3tech.sa?igsh=aW14cDY0cmtvZW9p" target='blank' className="bi bi-instagram text-white mx-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;

