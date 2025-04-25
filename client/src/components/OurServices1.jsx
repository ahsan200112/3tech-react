import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { getServices } from '../api/apiEndpoints'
import { useTranslation } from 'react-i18next';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook
import { Link } from 'react-router-dom';

const OurServices1 = () => {
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
                    <div className="col-md-4" data-aos="flip-left" data-aos-delay="300">
                        <div className="card h-100 custom-transition">
                            <div className="card-body">
                                <button className="btn-sm u-vise">{t("Our Services")}</button>
                                <h5 className="card-title u-item mt-3 mb-3">{t("Solutions That Redefine Excellence")}</h5>
                                <Link to="/services" className="text-decoration-none"
                                    onClick={() => trackEvent('click on services link', 'Navigation', 'Click', 'Services Page Link')}
                                >
                                    <button className="btn-next">{t("View All Services")}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {services.map(service => (
                        <div key={service._id} className="col-md-4" data-aos="flip-left" data-aos-delay="300">
                            <Link to={service.link} className="text-decoration-none"
                                onClick={() => trackEvent('click on services link', 'Navigation', 'Click', `${service.title} Page Link`)}
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
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices1;
