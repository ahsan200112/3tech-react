import React from 'react';
import { useTranslation } from 'react-i18next';
import TopImg from "../assets/images/top.png";
import LapImg from "../assets/images/lap.png";
import ParImg from "../assets/images/par.png";


const OurProjectsDetail = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="v-section" style={{ marginTop: "-48px" }}>
            <div className="container my-5 py-4">
                <button className="btn-sm u-vise mt-5 mb-2" style={{ width: "125px"}}>{t("Our Projects")}</button>
                <h2 className="n-w">{t("Showcasing Excellence Across Industries")}</h2>
                <p className="n-e" style={{maxWidth: "800px", wordBreak: "break-word"}}>
                    {t("At 3Tech, every project is a reflection of our commitment to innovation, quality, and client success. Explore how we’ve helped businesses grow and thrive in the digital world.")}
                </p>
                <div className="row">
                    <div className="d-flex justify-content-around align-items-center flex-wrap">
                        {[
                            t("All"),
                            t("E-Commerce Solutions"),
                            t("Mobile Applications"),
                            t("Marketing Solutions"),
                            t("Creative Design"),
                            t("Digital Optimization")
                        ].map((item, index, array) => (
                            <React.Fragment key={index}>
                                <p className="c-m">{item}</p>
                                {index !== array.length - 1 && <span className="mx-2 mb-4">|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card project-card position-relative">
                            <div className="tag">{t("E-Commerce Solutions")}</div>
                            <img src={TopImg} class="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{maxWidth: "600px", wordBreak: "break-word"}}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">{t("Creative Design")}</div>
                            <img src={LapImg} className="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{maxWidth: "600px", wordBreak: "break-word"}}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
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
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">{t("Mobile Applications")}</div>
                            <img src={LapImg} className="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{maxWidth: "600px", wordBreak: "break-word"}}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">{t("Creative Design")}</div>
                            <img src={ParImg} className="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{maxWidth: "600px", wordBreak: "break-word"}}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
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
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">{t("Creative Design")}</div>
                            <img src={TopImg} className="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{maxWidth: "600px", wordBreak: "break-word"}}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
                                <div className="tags n-y">
                                    <span>{t("UI & UX Design")}</span>
                                    <span>{t("Web Design")}</span>
                                    <span>{t("Graphic Design")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">{t("Mobile Application")}</div>
                            <img src={ParImg} className="card-img-top" alt="Project" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0">{t("Web Design & Development")}</h5>
                                    <i className="bi bi-arrow-up-right n-r"></i>
                                </div>
                                <p className="card-text n-t" style={{maxWidth: "600px", wordBreak: "break-word"}}>{t("Explore modern, responsive websites crafted for diverse industries.")}</p>
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

