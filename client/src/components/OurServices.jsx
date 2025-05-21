/*import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { getServices } from '../api/apiEndpoints'
import { useTranslation } from 'react-i18next';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook
//import { Link } from 'react-router-dom';

const OurServices = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const trackEvent = useGTMEventTracker();  // Use the custom hook
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        try {
            const res = await api.get(getServices);
            setServices(res.data); // Save the FAQ data returned from the backend
        } catch (error) {
            console.error("Error fetching FAQ data:", error);
        }
    };

    useEffect(() => {
        fetchServices(); // Fetch FAQs when the component mounts
    }, []);

    return (
        <section className="u-section">
            <div className="container py-5">
                <div className="row g-3">
                    <div className="col-md-4" data-aos="flip-left" data-aos-delay="100">
                        <div className="card h-100 custom-transition" style={{ cursor: "default" }}>
                            <div className="card-body">
                                <h3 className="u-vise" style={{ width: "134px" }}>{t("Our Services")}</h3>
                                <h5 className="card-title u-item mt-3 mb-3">{t("Solutions That Redefine Excellence")}</h5>
                            </div>
                        </div>
                    </div>
                    {services.map(service => (
                        <div key={service._id} className="col-md-4" data-aos="flip-left" data-aos-delay="100">
                            <a href={service.link} className="text-decoration-none"
                                onClick={() => trackEvent('click on services link', 'Navigation', 'Click', `${service.title.en} Page Link`)}
                            >
                                <div className="card h-100 card-border-color color-effect-card custom-transition" style={{ borderRadius: "14px" }}>
                                    <div className="card-body" style={{ padding: "30px 30px" }}>
                                        {service.image && (
                                            <img src={service.image} alt={service.title[lang]} style={{ height: "60px", width: "60px" }} />
                                        )}
                                        <h5 className="card-title u-well mt-3">{service.title[lang]}</h5>
                                        <p className="card-text u-space">{service.description[lang]}</p>
                                        <p className="u-help">{t("Explore")} {service.title[lang]}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices; */

import React from 'react';
import { useTranslation } from 'react-i18next';
//import { Link } from 'react-router-dom';
import SocialMediaMarketingImg from '../assets/images/social-media-marketing 1.png';
import Group2Img from "../assets/images/Group (2).png";
import YGPImg from "../assets/images/ygb.png";
import JUImg from "../assets/images/ju.png";
import Group3Img from "../assets/images/Group (3).png";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const OurServices = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    const trackEvent = useGTMEventTracker();  // Use the custom hook

    return (
        <section className="u-section">
            <div className="container py-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="100">
                            <div className="card h-100 custom-transition" style={{ cursor: "default" }}>
                                <div className="card-body">
                                    <h3 className="u-vise" style={{ width: "134px" }}>{t("Our Services")}</h3>
                                    <h5 className="card-title u-item mt-3 mb-3">{t("Solutions That Redefine Excellence")}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="100">
                            <a className="text-decoration-none" href="/ecommercesolutions"
                                onClick={() => trackEvent('click on services link', 'Navigation', 'Click', 'E-commerce Solutions Page Link')}
                            >
                                <div className="card h-100 card-border-color color-effect-card custom-transition" style={{ borderRadius: "14px" }}>
                                    <div className="card-body" style={{ padding: "30px 30px" }}>
                                        <img src={Group2Img} alt="Mobile preview" style={{ height: "60px", width: "56px" }} />
                                        <h5 className="card-title u-well mt-3">{t("E-Commerce Solutions")}</h5>
                                        <p className="card-text u-space">
                                            {t("Launch and manage online stores effortlessly with user-friendly designs, payment integration, and shipping tools for e-commerce success.")}
                                        </p>
                                        <p className="u-help">
                                            {t("Explore E-Commerce Solutions")}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="100">
                            <a className="text-decoration-none" href="/mobileapplications"
                                onClick={() => trackEvent('click on services link', 'Navigation', 'Click', 'Mobile Applications Page Link')}
                            >
                                <div className="card h-100 card-border-color color-effect-card custom-transition" style={{ borderRadius: "14px" }}>
                                    <div className="card-body" style={{ padding: "30px 30px" }}>
                                        <img src={YGPImg} alt="Mobile preview" style={{ height: "60px", width: "56px" }} />
                                        <h5 className="card-title u-well mt-3">{t("Mobile Applications")}</h5>
                                        <p className="card-text u-space">
                                            {t("Build or enhance custom apps, offering seamless user experiences in a mobile-first world.")}
                                        </p>
                                        <p className="u-help">
                                            {t("Explore Mobile Applications")}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="100">
                            <a className="text-decoration-none" href="/marketingsolutions"
                                onClick={() => trackEvent('click on services link', 'Navigation', 'Click', 'Marketing Soltions Page Link')}
                            >
                                <div className="card h-100 card-border-color color-effect-card custom-transition" style={{ borderRadius: "14px" }}>
                                    <div className="card-body" style={{ padding: "30px 30px" }}>
                                        <img src={SocialMediaMarketingImg} alt="Mobile preview" style={{ height: "60px", width: "56px" }} />
                                        <h5 className="card-title u-well mt-3">{t("Marketing Solutions")}</h5>
                                        <p className="card-text u-space">
                                            {t("Achieve growth with tailored marketing strategies, expert advertising, and high-quality content creation.")}
                                        </p>
                                        <p className="u-help">
                                            {t("Explore Marketing Solutions")}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="100">
                            <a className="text-decoration-none" href="/creativedesign"
                                onClick={() => trackEvent('click on services link', 'Navigation', 'Click', 'Creative Design Page Link')}
                            >
                                <div className="card h-100 card-border-color color-effect-card custom-transition" style={{ borderRadius: "14px" }}>
                                    <div className="card-body" style={{ padding: "30px 30px" }}>
                                        <img src={JUImg} alt="Mobile preview" style={{ height: "60px", width: "56px" }} />
                                        <h5 className="card-title u-well mt-3">{t("Creative Design")}</h5>
                                        <p className="card-text u-space">
                                            {t("Elevate your brand with unique visual identities, stunning graphics, and innovative designs.")}
                                        </p>
                                        <p className="u-help">
                                            {t("Explore Creative Design")}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="100">
                            <a className="text-decoration-none" href="/digitaloptimization"
                                onClick={() => trackEvent('click on services link', 'Navigation', 'Click', 'Digital Optimization Page Link')}
                            >
                                <div className="card h-100 card-border-color color-effect-card custom-transition" style={{ borderRadius: "14px" }}>
                                    <div className="card-body" style={{ padding: "30px 30px" }}>
                                        <img src={Group3Img} alt="Mobile preview" style={{ height: "60px", width: "56px" }} />
                                        <h5 className="card-title u-well mt-3">{t("Digital Optimization")}</h5>
                                        <p className="card-text u-space">
                                            {t("Enhance online visibility through expert SEO and social media management to reach the right audience.")}
                                        </p>
                                        <p className="u-help">
                                            {t("Explore Digital Optimization")}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;  