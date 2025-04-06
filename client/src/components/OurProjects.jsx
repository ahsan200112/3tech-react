import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Laptop1Img from "../assets/images/laptop1.png";
//import CenterImg from "../assets/images/center.png";
//import Laptop2Img from "../assets/images/laptop2.png";
//import Laptop3Img from "../assets/images/laptop3.png";
import Project1 from "../assets/images/1Project.png";
import Project2 from "../assets/images/2Project.png";
import Project3 from "../assets/images/3Project.png";
import Project4 from "../assets/images/4Project.png";
import Project5 from "../assets/images/5Project.png";
import Project6 from "../assets/images/6Project.png";
import Project7 from "../assets/images/7Project.png";

const OurProjects = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false, 
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="v-section">
            <div className="container py-5">
                <div className="py-5" data-aos="fade-left" data-aos-delay="400">
                    <button className="btn-sm v-viral" style={{ width: "150px" }}>{t("Our Projects")}</button>
                    <div className="d-flex justify-content-between align-items-center btn-nextline">
                        <h2 className="v-visit">{t("Our Work Speaks For Itself")}</h2>
                       {/* <button className="btn-view width-full">{t("View More")}</button> */}
                    </div>
                    <p className="v-info mt-2" style={{ maxWidth: "800px", wordBreak: "break-word" }}>{t("Explore our success stories in e-commerce, app development, and creative marketing. See how we've helped businesses like yours thrive.")}</p>
                    {/* ✅ Image Cards */}
                    {/* <div className="row mt-4">
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
                    </div> */}
                    {/* ✅ Image Slider */}
                    <Slider {...settings} className="mt-4">
                        {[
                            { img: Project1, text: "Web Design & Development", description: "Explore modern, responsive websites crafted for diverse industries." },
                            { img: Project2, text: "Creative Design", description: "Explore modern, responsive websites crafted for diverse industries." },
                            { img: Project3, text: "E-Commerce Solutions", description: "Explore modern, responsive websites crafted for diverse industries." },
                            { img: Project4, text: "Web Design & Development", description: "Explore modern, responsive websites crafted for diverse industries." },
                            { img: Project5, text: "Creative Design", description: "Explore modern, responsive websites crafted for diverse industries." },
                            { img: Project6, text: "E-Commerce Solutions", description: "Explore modern, responsive websites crafted for diverse industries." },
                            { img: Project7, text: "E-Commerce Solutions", description: "Explore modern, responsive websites crafted for diverse industries." }
                        ].map((item, index) => (
                            <div key={index} className="slide-item" data-aos="flip-left" data-aos-delay="500">
                                <div className="card project-card">
                                    <div className="image-overlay-container" style={{height:"400px"}}>
                                        <img src={item.img} className="card-img-top" alt={item.text} />
                                       {/* <div className="overlay-text">
                                            <div className="v-help">{t(item.text)}</div>
                                            <div className="d-flex justify-content-between">
                                                <div className="v-live">
                                                    {t(item.description)}
                                                </div>
                                                <img src={CenterImg} alt="Example" className="overlay-icon" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default OurProjects;
