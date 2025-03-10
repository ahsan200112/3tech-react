import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import BlackImg from "../assets/images/Black.png";

const MobileApplicationsFirstComponent = () => {
    const { t } = useTranslation();
    return (
        <div style={{ backgroundColor: " #090909" }}>
            <section className="while-valu ">
                <div className="container pt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="o-hlo" style={{ borderBottom: "2px solid" }}>Mobile Applications</h2>
                            {/* <h4 className="o-a">
                                <i className="bi bi-house-door"></i> Home / About Us
                            </h4> */}
                            <h4 className="o-a d-flex align-items-center" style={{ gap: "8px" }}>
                                <i className="bi bi-house-door"></i>
                                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}> Home </Link> / Mobile Applications
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

export default MobileApplicationsFirstComponent;

