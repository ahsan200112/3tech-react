import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Project1 from "../assets/images/1Project.webp";
import Project2 from "../assets/images/2Project.webp";
import Project3 from "../assets/images/3Project.webp";
import Project4 from "../assets/images/4Project.webp";
import Project5 from "../assets/images/5Project.webp";
import Project6 from "../assets/images/6Project.webp";
import Project7 from "../assets/images/7Project.webp";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const OurProjectsDetail = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    const trackEvent = useGTMEventTracker();  // Use the custom hook

    const handleProjectClick = (projectName) => {
        trackEvent(`click on ${projectName} project button`, 'Project', 'Click', projectName);  // Track the event when a project is clicked
    };

    return (
        <section className="v-section">
            <div className="container py-5">
                <h3 className="u-vise mt-5 mb-2" style={{ width: "150px" }}>{t("Our Projects")}</h3>
                <h2 className="n-w">{t("Showcasing Excellence Across Industries")}</h2>
                <p className="n-e" style={{ maxWidth: "800px", wordBreak: "break-word" }}>
                    {t("At 3Tech, every project is a reflection of our commitment to innovation, quality, and client success. Explore how we’ve helped businesses grow and thrive in the digital world.")}
                </p>
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
                                    onClick={() => trackEvent('click on links', 'Navigation', 'Click', item.label)} // Track navigation link clicks
                                >
                                    {item.label}
                                </Link>
                                {index !== array.length - 1 && <span className="nav-divider"></span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="card project-card position-relative">
                            {/* <div><Link className="tag text-decoration-none" to="/ecommercesolutions">{t("E-Commerce Solutions")}</Link></div> */}
                            <img src={Project1} className="card-img-top" alt="Project"
                                onClick={() => handleProjectClick("Web Design & Development")}  // Track project image click
                            />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                {/*  <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-down" data-aos-delay="500">
                        <div className="card project-card position-relative">
                            {/*   <div><Link className="tag text-decoration-none" to="/creativedesign">{t("Creative Design")}</Link></div> */}
                            <img src={Project2} className="card-img-top" alt="Project"
                                onClick={() => handleProjectClick("Web Design & Development")}  // Track project image click
                            />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                {/*<div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="card project-card position-relative">
                            {/*  <div><Link className="tag text-decoration-none" to="/mobileapplications">{t("Mobile Applications")}</Link></div> */}
                            <img src={Project3} className="card-img-top" alt="Project"
                                onClick={() => handleProjectClick("Web Design & Development")}  // Track project image click
                            />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                {/*  <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-down" data-aos-delay="500">
                        <div className="card project-card position-relative">
                            {/*  <div><Link className="tag text-decoration-none" to="/digitaloptimization">{t("Digital Optimization")}</Link></div> */}
                            <img src={Project4} className="card-img-top" alt="Project"
                                onClick={() => handleProjectClick("Web Design & Development")}  // Track project image click
                            />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                {/*  <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="card project-card position-relative">
                            {/*  <div><Link className="tag text-decoration-none" to="/marketingsolutions">{t("Marketing Solutions")}</Link></div> */}
                            <img src={Project5} className="card-img-top" alt="Project"
                                onClick={() => handleProjectClick("Web Design & Development")}  // Track project image click
                            />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                {/*   <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-down" data-aos-delay="500">
                        <div className="card project-card position-relative">
                            {/*  <div><Link className="tag text-decoration-none" to="/ecommercesolutions">{t("E-Commerce Solutions")}</Link></div> */}
                            <img src={Project6} className="card-img-top" alt="Project"
                                onClick={() => handleProjectClick("Web Design & Development")}  // Track project image click
                            />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                {/*  <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-6" data-aos="fade-down" data-aos-delay="500">
                        <div className="card project-card position-relative">
                            {/*  <div><Link className="tag text-decoration-none" to="/marketingsolutions">{t("Marketing Solutions")}</Link></div> */}
                            <img src={Project7} className="card-img-top" alt="Project"
                                onClick={() => handleProjectClick("Web Design & Development")}  // Track project image click
                            />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                {/*   <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default OurProjectsDetail;

