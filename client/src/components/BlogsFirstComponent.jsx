import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import BlackImg from "../assets/images/Black.png";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const BlogsFirstComponent = () => {
    const { t } = useTranslation();
    const trackEvent = useGTMEventTracker();  // Use the custom hook

    return (
        <div className="while-valu color-effect-firstC">
            <section >
                <div className="container pt-5" data-aos="fade-down"data-aos-delay="500">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="o-hlo" style={{ borderBottom: "2px solid" }}>{t("Blogs")}</h2>
                            <h4 className="o-a d-flex align-items-center" style={{ gap: "8px" }}>
                                <i className="bi bi-house-door"></i>
                                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}
                                    onClick={() => trackEvent('click on link','Navigation', 'Click', 'Home Page Link')}  // Track event
                                >
                                    {t("Home")}
                                </Link> / {t("Blogs")}
                            </h4>
                        </div>
                        <div className="text-end">
                            <img src={BlackImg} alt={t("Company Logo")} className="img-fluid responsive-logo first-component-img"
                                style={{ maxWidth: "100%", height: "auto" }}
                                onClick={() => trackEvent('click on image' ,'Image', 'Click', 'Background Image')}  // Track event
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogsFirstComponent;
