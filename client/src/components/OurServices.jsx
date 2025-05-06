import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="300">
                            <div className="card h-100 custom-transition">
                                <div className="card-body">
                                    <h3 className="u-vise" style={{ width: "134px" }}>{t("Our Services")}</h3>
                                    <h5 className="card-title u-item mt-3 mb-3">{t("Solutions That Redefine Excellence")}</h5>
                                  {/*  <Link to="/services" className="text-decoration-none"
                                        onClick={() => trackEvent('click on services link', 'Navigation', 'Click', 'Services Page Link')}
                                    >
                                        <button className="btn-next">{t("View All Services")}</button>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="300">
                            <Link className="text-decoration-none" to="/ecommercesolutions"
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
                            </Link>
                        </div>
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="300">
                            <Link className="text-decoration-none" to="/mobileapplications"
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
                            </Link>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="300">
                            <Link className="text-decoration-none" to="/marketingsolutions"
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
                            </Link>
                        </div>
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="300">
                            <Link className="text-decoration-none" to="/creativedesign"
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
                            </Link>
                        </div>
                        <div className="col-md-4" data-aos="flip-left" data-aos-delay="300">
                            <Link to="/digitaloptimization" className="text-decoration-none"
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;