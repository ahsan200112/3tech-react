import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SocialMediaMarketingImg from '../assets/images/social-media-marketing 1.png';
import Group2Img from "../assets/images/Group (2).png";
import Ellipse2Img from "../assets/images/Ellipse 2.png";
import YGPImg from "../assets/images/ygb.png";
import JUImg from "../assets/images/ju.png";
import Group3Img from "../assets/images/Group (3).png";

const OurServices = () => {
    const { t } = useTranslation();
   // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="u-section">
            <div className="container py-5">
                <div className="mt-5">
                    <div className="container">
                        <div className="row g-3 mt-5">
                            <div className="col-md-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <button className="btn-sm u-vise">{t("Our Services")}</button>
                                        <h5 className="card-title u-item mt-3">{t("Solutions That Redefine Excellence")}</h5>
                                        <button className="btn-next">{t("View All Services")}</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100" style={{ background: "linear-gradient(106.11deg, rgba(193, 64, 193, 0.1) 7.4%, rgba(127, 148, 230, 0.1) 100%)" }}>
                                    <div className="card-body" style={{ padding: "30px 30px" }}>
                                        <img src={Group2Img} alt="Mobile preview" style={{ height: "60px", width: "56px" }} />
                                        <h5 className="card-title u-well mt-3">{t("E-Commerce Solutions")}</h5>
                                        <p className="card-text u-space">
                                            {t("Launch and manage online stores effortlessly with user-friendly designs, payment integration, and shipping tools for e-commerce success.")}
                                        </p>
                                        <p>
                                        <Link className="u-help text-decoration-none" to="/ecommercesolutions">{t("Explore E-Commerce Solutions")}</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100">
                                    <img src={Ellipse2Img} alt="Mobile preview" style={{ height: "15px", width: "350px" }} />
                                    <div className="card-body" style={{ padding: "30px 30px" }}>
                                        <img src={YGPImg} alt="Mobile preview" style={{ height: "60px", width: "56px" }} />
                                        <h5 className="card-title u-well mt-3">{t("Mobile Applications")}</h5>
                                        <p className="card-text u-space">
                                            {t("Build or enhance custom apps, offering seamless user experiences in a mobile-first world.")}
                                        </p>
                                        <p>
                                        <Link className="u-help text-decoration-none" to="/mobileapplications">{t("Explore Mobile Applications")}</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 mt-3">
                            <div className="col-md-4 ">
                                <div className="card h-100">
                                    <img src={Ellipse2Img} alt="Mobile preview" style={{ height: "15px", width: "350px" }} />
                                    <div className="card-body" style={{ padding: "30px 30px" }}>

                                        <img src={SocialMediaMarketingImg} alt="Mobile preview" style={{ height: "60px", width: "56px" }} />
                                        <h5 className="card-title u-well mt-3">{t("Marketing Solutions")}</h5>
                                        <p className="card-text u-space">
                                            {t("Achieve growth with tailored marketing strategies, expert advertising, and high-quality content creation.")}
                                        </p>
                                        <p>
                                        <Link className="u-help text-decoration-none" to="/marketingsolutions">{t("Explore Marketing Solutions")}</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="card h-100">
                                    <img src={Ellipse2Img} alt="Mobile preview" style={{ height: "15px", width: "350px" }} />
                                    <div className="card-body" style={{ padding: "30px 30px" }}>
                                        <img src={JUImg} alt="Mobile preview" style={{ height: "60px", width: "56px" }} />
                                        <h5 className="card-title u-well mt-3">{t("Creative Design")}</h5>
                                        <p className="card-text u-space">
                                            {t("Elevate your brand with unique visual identities, stunning graphics, and innovative designs.")}
                                        </p>
                                        <p>
                                        <Link className="u-help text-decoration-none" to="/creativedesign">{t("Explore Creative Design")}</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="card h-100">
                                    <img src={Ellipse2Img} alt="Mobile preview" style={{ height: "15px", width: "350px" }} />
                                    <div className="card-body" style={{ padding: "30px 30px" }}>
                                        <img src={Group3Img} alt="Mobile preview" style={{ height: "60px", width: "56px" }} />
                                        <h5 className="card-title u-well mt-3">{t("Digital Optimization")}</h5>
                                        <p className="card-text u-space">
                                            {t("Enhance online visibility through expert SEO and social media management to reach the right audience.")}
                                        </p>
                                        <p>
                                        <Link className="u-help text-decoration-none" to="/digitaloptimization">{t("Explore Digital Optimization")}</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;