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
                    <button className="btn btn-sm  v-viral" style={{ width: "100px", color: "#3B9BE9" }}>{t("Our Projects")}</button>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="v-visit">{t("Our Work Speaks For Itself")}</h2>
                        <button className="btn-view text-end">{t("View More")}</button>
                    </div>
                    <p className="v-info" style={{maxWidth: "800px", wordBreak: "break-word"}}>{t("Explore our success stories in e-commerce, app development, and creative marketing. See how we've helped businesses like yours thrive.")}</p>
                    <div className="d-flex justify-content-end">
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="image-overlay-container">
                                    <img src={Laptop1Img} className="card-img-top" alt="Web Design" />
                                    <div class="overlay-text">
                                        <div className="v-help ">{t("Web Design & Development")}</div>
                                        <div className="v-live d-flex justify-content-between">
                                            <div className="v-live">
                                                {t("Explore modern, responsive websites crafted for diverse industries.")}
                                            </div>
                                            <div>
                                                <img src={CenterImg} alt="Example" style={{ width: "19px", height: "17", color: "#FFFFFF" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src={Laptop3Img} className="card-img-top" alt="Design" style={{ height: "300px", width: "355px" }} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src={Laptop2Img} className="card-img-top" alt="Background Abstract"
                                    style={{ height: "300px", width: "355px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProjects;
