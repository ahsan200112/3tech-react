import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import BlackImg from "../assets/images/Black.png";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const DigitalOptimizationFirstComponent = () => {
    const { t } = useTranslation();
    const trackEvent = useGTMEventTracker();  // Use the custom hook

    return (
        <div className="while-valu color-effect-firstC">
            <section >
                <div className="container pt-5" data-aos="fade-down" data-aos-delay="600">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="o-hlo" style={{ borderBottom: "2px solid" }}>{t("Digital Optimization")}</h2>
                            {/* <h4 className="o-a">
                                <i className="bi bi-house-door"></i> Home / About Us
                            </h4> */}
                            <h4 className="o-a d-flex align-items-center" style={{ gap: "8px" }}>
                                <i className="bi bi-house-door"></i>
                                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}
                                    onClick={() => trackEvent('Navigation', 'Click', 'Home Page Link')}  // Track event
                                > {t("Home")} </Link> / {t("Digital Optimization")}
                            </h4>
                        </div>
                        <div className="text-end">
                            <img src={BlackImg} alt="Company Logo" className="img-fluid responsive-logo"
                                style={{ maxWidth: "100%", height: "auto" }}
                                onClick={() => trackEvent('Image', 'Click', 'Background Image')}  // Track event
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalOptimizationFirstComponent;

