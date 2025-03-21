import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import BlackImg from "../assets/images/Black.png";

const ServicesFirstComponent = () => {
    const { t } = useTranslation();
   // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <div className="while-valu">
            <section >
                <div className="container pt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="o-hlo" style={{ borderBottom: "2px solid" }}>{t("Services")}</h2>
                            <h4 className="o-a d-flex align-items-center" style={{ gap: "8px" }}>
                                <i className="bi bi-house-door"></i>
                                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}> {t("Home")} </Link> / {t("Services")}
                            </h4>
                        </div>
                        <div className="text-end">
                            <img src={BlackImg} alt="Company Logo" className="img-fluid responsive-logo"
                                style={{ maxWidth: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesFirstComponent;

