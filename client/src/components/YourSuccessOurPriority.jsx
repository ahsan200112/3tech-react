import React from 'react';
import { useTranslation } from 'react-i18next';
//import { Link } from 'react-router-dom';
import YTImg from "../assets/images/yt.png";
import { useTheme } from "../context/ThemeContext";
import PartnerImgDark from '../assets/images/partner dark mode.png';
import PartnerImgLight from '../assets/images/partner light mode.png';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const YourSuccessOurPriority = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === "rtl";
    const { theme } = useTheme(); // Get theme from context
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    const trackEvent = useGTMEventTracker();  // Use the custom hook

    return (
        <section className="v-section">
            <div className="container py-5" data-aos="fade-up" data-aos-delay="800">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column mb-4">
                        <h3 className="u-easy mb-2" style={{ width: "225px" }}>{t("Your Success, Our Priority")}</h3>
                        <h2 className="u-vell">{t("Why Partner With 3Tech?")}</h2>
                        <p className="v-wel">
                            {t("3Tech doesn't just deliver solutions; we create stories. With us, you own your project without recurring fees and gain access to a complete suite of services to transform your ideas into reality.")}
                        </p>
                        <ul className="list-unstyled">
                            <li className="custom-list-item custom-list-padding d-flex align-items-center mt-3">
                                <img src={YTImg} alt="Icon" className="custom-margin-img" style={{ width: "20px", height: "20px" }} />
                                <span>{t("Project Ownership")}</span>
                            </li>
                            <li className="custom-list-item custom-list-padding d-flex align-items-center mt-3">
                                <img src={YTImg} alt="Icon" className="custom-margin-img" style={{ width: "20px", height: "20px" }} />
                                <span>{t("Custom-Tailored Solutions")}</span>
                            </li>
                            <li className="custom-list-item custom-list-padding d-flex align-items-center mt-3">
                                <img src={YTImg} alt="Icon" className="custom-margin-img" style={{ width: "20px", height: "20px" }} />
                                <span>{t("Creative Marketing Expertise")}</span>
                            </li>
                            <li className="custom-list-item custom-list-padding d-flex align-items-center mt-3">
                                <img src={YTImg} alt="Icon" className="custom-margin-img" style={{ width: "20px", height: "20px" }} />
                                <span>{t("Dedicated Support Team")}</span>
                            </li>
                            <li className="custom-list-item custom-list-padding d-flex align-items-center mt-3">
                                <img src={YTImg} alt="Icon" className="custom-margin-img" style={{ width: "20px", height: "20px" }} />
                                <span>{t("Cost-Effective Solutions")}</span>
                            </li>
                        </ul>
                        <a className="button-48 btn-contact text-decoration-none mb-2" href="/contact"
                            onClick={() => trackEvent('click on button', 'Navigation', 'Click', 'ContactUs Button')}
                        ><span className="text">{t("Contact Us")}</span></a>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="v-well" style={{ margin: "0" }}>{t("Our Customers' Reviews")}</h5>
                            <p className="v-fill text-end">
                                <i className="bi bi-star-fill"></i> 4.8
                            </p>
                        </div>
                        <div className="card border-0 no-hover">
                            <img src={theme === "light" ? PartnerImgLight : PartnerImgDark} className="card-img img-fluid w-100" alt="Customer Reviews" />
                        </div>
                        <div className="d-flex align-items-start">
                            <span className={`highlighted-number ${isRTL ? "ms-3" : "me-3"}`}>150+</span>

                            <div className="regular-text mt-3">
                                {/*  <span>{t("Customers in over 5 countries")}</span><br /> */}
                                <span>{t("Clients grow their business with 3tech")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YourSuccessOurPriority;