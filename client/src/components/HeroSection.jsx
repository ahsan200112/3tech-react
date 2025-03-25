import React from 'react';
import BackgroundImg from "../assets/images/backgroundImgInHeroSection.png";
import HeroImageDark from "../assets/images/HeroImage Dark Mode1.png";
import HeroImageLight from "../assets/images/HeroImage Light Mode.png";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const { t } = useTranslation();
    const { theme } = useTheme(); // Get theme from context

    return (
        <section className="hero-section"
            style={{
                backgroundImage: `url(${BackgroundImg})`, // Replace BackgroundImg with your image import
                backgroundSize: "cover", // Cover full div
                backgroundPosition: "center", // Center the image
                backgroundRepeat: "no-repeat", // No repeat
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="user">
                            <p className="hlo">{t("Digital Solutions")}</p>
                            <h1 className="u-vie">{t("Empowering Innovation with Cutting-Edge Technology")}</h1>
                            <p className="u-whi">{t("At 3Tech, we provide cutting-edge solutions designed to help your business grow and succeed. From customized software to seamless system integrations, we deliver the tools you need to stay ahead in a fast-paced digital world.")}
                            </p>
                            <div className="d-flex gap-3 mb-3 custom-content-center btn-column btn-nextline responsive-buttons">
                                <Link to="/contact" className="text-decoration-none">
                                    <button className="btn-under">{t("Discover Our Solutions")}</button>
                                </Link>
                                <Link to="/contact" className="text-decoration-none">
                                    <button className="btn-while">{t("Get a Free Consultation")}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 align-items-center mockup-image">
                        <img src={theme === "light" ? HeroImageLight : HeroImageDark} alt="Phone Mockup" className="img-fluid phone-mockup" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;