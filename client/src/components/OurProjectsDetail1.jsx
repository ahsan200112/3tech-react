import React, { useEffect, useState } from 'react';
import api from '../api';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';

const OurProjectsDetail1 = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);
    const trackEvent = useGTMEventTracker();

    useEffect(() => {
        api.get('/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the projects!", error);
            });
    }, []);

    const handleProjectClick = (projectName) => {
        trackEvent(`click on ${projectName} project button`, 'Project', 'Click', projectName);
    };

    return (
        <section className="v-section">
            <div className="container py-5">
                <button className="btn-sm u-vise mt-5 mb-2" style={{ width: "150px" }}>{t("Our Projects")}</button>
                <h2 className="n-w">{t("Showcasing Excellence Across Industries")}</h2>
                <p className="n-e" style={{ maxWidth: "800px", wordBreak: "break-word" }}>
                    {t("At 3Tech, every project is a reflection of our commitment to innovation, quality, and client success. Explore how we’ve helped businesses grow and thrive in the digital world.")}
                </p>

                {/* Filter Buttons */}
                <div className="row">
                    <div className="d-flex justify-content-around align-items-center flex-wrap mb-3">
                        {[
                            { label: t("All"), path: "/projects" },
                            { label: t("E-Commerce Solutions"), path: "/ecommercesolutions" },
                            { label: t("Mobile Applications"), path: "/mobileapplications" },
                            { label: t("Marketing Solutions"), path: "/marketingsolutions" },
                            { label: t("Creative Design"), path: "/creativedesign" },
                            { label: t("Digital Optimization"), path: "/digitaloptimization" }
                        ].map((item, index, array) => (
                            <React.Fragment key={index}>
                                <Link to={item.path} className="c-m text-decoration-none nav-item"
                                    onClick={() => trackEvent('click on links', 'Navigation', 'Click', item.label)}>
                                    {item.label}
                                </Link>
                                {index !== array.length - 1 && <span className="nav-divider"></span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Dynamic Projects Grid */}
                <div className="container">
                    <div className="row g-4">
                        {projects.map((project, index) => (
                            <div className="col-md-6" key={project.id} data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} data-aos-delay="500">
                                <div className="card project-card position-relative">
                                    <img
                                        src={project.image}
                                        className="card-img-top"
                                        alt="Project"
                                        onClick={() => handleProjectClick(project.title)}
                                        style={{ width: "1064px", height: "1160px" }}
                                    />
                                    <div className="card-content">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="card-title n-r mb-0">{t(project.title)}</h5>
                                            <i className="bi bi-arrow-up-right n-r"></i>
                                        </div>
                                        <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t(project.description)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProjectsDetail1;
