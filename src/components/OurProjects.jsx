import React from 'react';
import { useTranslation } from 'react-i18next';
import Laptop1Img from "../assets/images/laptop1.png";
import CenterImg from "../assets/images/center.png";
import Laptop2Img from "../assets/images/laptop2.png";
import Laptop3Img from "../assets/images/laptop3.png";


const OurProjects = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="v-section">
            <div className="container py-5">
                <div className="py-5">
                    <button className="btn-sm v-viral" style={{ width: "150px" }}>{t("Our Projects")}</button>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="v-visit">{t("Our Work Speaks For Itself")}</h2>
                        <button className="btn-view text-end">{t("View More")}</button>
                    </div>
                    <p className="v-info" style={{ maxWidth: "800px", wordBreak: "break-word" }}>{t("Explore our success stories in e-commerce, app development, and creative marketing. See how we've helped businesses like yours thrive.")}</p>
                    {/* ✅ Image Cards */}
                    <div className="row mt-4">
                        {[
                            { img: Laptop1Img, text: "Web Design & Development" },
                            { img: Laptop2Img, text: "Creative Design" },
                            { img: Laptop3Img, text: "E-Commerce Solutions" }
                        ].map((item, index) => (
                            <div className="col-md-4 col-sm-12 d-flex align-items-stretch mb-3" key={index}>
                                <div className="card project-card">
                                    <div className="image-overlay-container">
                                        <img src={item.img} className="card-img-top" alt={item.text} />
                                        <div className="overlay-text">
                                            <div className="v-help">{t(item.text)}</div>
                                            <div className="d-flex justify-content-between">
                                                <div className="v-live">
                                                    {t("Explore modern, responsive websites crafted for diverse industries.")}
                                                </div>
                                                <img src={CenterImg} alt="Example" className="overlay-icon" />
                                            </div>
                                        </div>
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

export default OurProjects;
