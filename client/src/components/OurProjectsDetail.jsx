import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import TopImg from "../assets/images/top.png";
import LapImg from "../assets/images/lap.png";
import ParImg from "../assets/images/par.png";


const OurProjectsDetail = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="v-section">
            <div className="container py-5">
                <button className="btn-sm u-vise mt-5 mb-2" style={{ width: "150px" }}>{t("Our Projects")}</button>
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
                                <Link to={item.path} className="c-m text-decoration-none nav-item">
                                    {item.label}
                                </Link>
                                {index !== array.length - 1 && <span className="nav-divider"></span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card project-card position-relative">
                            <div><Link className="tag text-decoration-none" to="/ecommercesolutions">{t("E-Commerce Solutions")}</Link></div>
                            <img src={TopImg} class="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card project-card position-relative">
                            <div><Link className="tag text-decoration-none" to="/creativedesign">{t("Creative Design")}</Link></div>
                            <img src={LapImg} className="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card project-card position-relative">
                            <div><Link className="tag text-decoration-none" to="/mobileapplications">{t("Mobile Applications")}</Link></div>
                            <img src={LapImg} className="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card project-card position-relative">
                            <div><Link className="tag text-decoration-none" to="/digitaloptimization">{t("Digital Optimization")}</Link></div>
                            <img src={ParImg} className="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card project-card position-relative">
                            <div><Link className="tag text-decoration-none" to="/marketingsolutions">{t("Marketing Solutions")}</Link></div>
                            <img src={TopImg} className="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card project-card position-relative">
                            <div><Link className="tag text-decoration-none" to="/ecommercesolutions">{t("E-Commerce Solutions")}</Link></div>
                            <img src={ParImg} className="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{ maxWidth: "600px", wordBreak: "break-word" }}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default OurProjectsDetail;

