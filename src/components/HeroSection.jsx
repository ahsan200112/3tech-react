import React from 'react';
import BackgroundImg from "../assets/images/backgroundImgInHeroSection.png";
import PhoneImg from "../assets/images/phone.png";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t, i18n } = useTranslation();
    const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className={`hero-section ${textAlignment}`}
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
                            <p className={`hlo ${textAlignment}`}>{t("Digital Solutions")}</p>
                            <h1 className={`u-vie ${textAlignment}`}>{t("Empowering Innovation with Cutting-Edge Technology")}</h1>
                            <p className={`u-whi ${textAlignment}`}>{t("At 3Tech, we provide cutting-edge solutions designed to help your business grow and succeed. From customized software to seamless system integrations, we deliver the tools you need to stay ahead in a fast-paced digital world.")}
                            </p>
                            <div>
                                <div className={`col ${textAlignment} d-flex gap-3`}>
                                    <button className="btn-under">{t("Discover Our Solutions")}</button>
                                    <button className="btn-while">{t("Get a Free Consultation")}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mockup-image">
                        <img src={PhoneImg} alt="Phone Mockup" className="img-fluid phone-mockup" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;