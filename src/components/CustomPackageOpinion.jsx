import React from 'react';
import { useTranslation } from 'react-i18next';
import CallImg from "../assets/images/call.svg";
import LocationImg from "../assets/images/Location.svg";
import EmailImg from "../assets/images/Email.png";

const CustomPackageOpinion = () => {
    const { t, i18n } = useTranslation();
    const isRTL = document.dir === "rtl"; // Ya kisi global state se lein
    
    return (
        <section style={{ backgroundColor: "#181818" }}>
            <div className="container py-5">
                <div className="mb-4">
                    <button className="btn btn-sm o-e" style={{ color: "#3B9BE9", border: "1px solid var(--Colors-Border-Border03, #1B1264)" }}>{t('Custom Package Option')}</button>
                    <h2 className="v-r mt-3" style={{maxWidth: "800px", wordBreak: "break-word"}}>{t('Didn’t Find What You Need? Let’s Build A Custom Package Just For You!')}</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
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
                                    <p className="h-k mb-0">966557122917+</p>
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
                        <form>
                            <div className="row g-3">
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor="name" className="form-label text-white">{t('Name')}*</label>
                                        <input type="text" className="form-control bg-transparent text-white" id="name" required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor="email" className="form-label text-white">{t('Email')}*</label>
                                        <input type="email" className="form-control bg-transparent text-white" id="email" required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor="phone" className="form-label text-white">{t('Phone')}*</label>
                                        <input type="text" className="form-control bg-transparent text-white" id="phone" required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label htmlFor="subject" className="form-label text-white">{t('Subject')}*</label>
                                        <input type="text" className="form-control bg-transparent text-white" id="subject" required />
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <div>
                                        <label htmlFor="message" className="form-label text-white">{t('Message')}*</label>
                                        <textarea className="form-control bg-transparent text-white" id="message" rows="2" required></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <button type="submit" className="btn text-white px-4 py-2" style={{ border: "1px solid #989898", borderRadius: "25px" }}>
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
