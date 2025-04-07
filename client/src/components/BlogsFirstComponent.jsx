import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import BlackImg from "../assets/images/Black.png";

const BlogsFirstComponent = () => {
    const { t } = useTranslation();
    return (
        <div className="while-valu color-effect-firstC">
            <section >
                <div className="container pt-5" data-aos="fade-down" data-aos-delay="600">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="o-hlo" style={{ borderBottom: "2px solid" }}>{t("Blogs")}</h2>
                            <h4 className="o-a d-flex align-items-center" style={{ gap: "8px" }}>
                                <i className="bi bi-house-door"></i>
                                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                                    {t("Home")}
                                </Link> / {t("Blogs")}
                            </h4>
                        </div>
                        <div className="text-end">
                            <img src={BlackImg} alt={t("Company Logo")} className="img-fluid responsive-logo"
                                style={{ maxWidth: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogsFirstComponent;
