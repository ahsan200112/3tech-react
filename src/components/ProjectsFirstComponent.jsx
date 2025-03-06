import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import BlackImg from "../assets/images/Black.png";

const ProjectsFirstComponent = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <div style={{ backgroundColor: " #090909" }}>
            <section className="while-valu ">
                <div className="container pt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="o-hlo" style={{ borderBottom: "2px solid" }}>Projects</h2>
                            <h4 className="o-a">
                                <i className="bi bi-house-door"></i>
                                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}> Home </Link> / Projects
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

export default ProjectsFirstComponent;

