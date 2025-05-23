import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { Swiper, SwiperSlide } from 'swiper/react';
//import { EffectCards } from 'swiper/modules';
//import 'swiper/css';
//import 'swiper/css/effect-cards';
import Project1 from "../assets/images/1Project.webp";
import Project2 from "../assets/images/2Project.webp";
import Project3 from "../assets/images/3Project.webp";
import Project4 from "../assets/images/4Project.webp";
import Project5 from "../assets/images/5Project.webp";
import Project6 from "../assets/images/6Project.webp";
import Project7 from "../assets/images/7Project.webp";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const OurProjects = () => {
    const { t } = useTranslation();
    const trackEvent = useGTMEventTracker();  // Get the event tracker
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        // lazyLoad: "ondemand",
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

    // Handle project image click event tracking
    const handleImageClick = (projectName) => {
        trackEvent('Projects', 'Click', projectName);
    };

    const projects = [
        { img: Project1, text: "Web Design & Development", description: "Explore modern, responsive websites crafted for diverse industries." },
        { img: Project2, text: "Creative Design", description: "Explore modern, responsive websites crafted for diverse industries." },
        { img: Project3, text: "E-Commerce Solutions", description: "Explore modern, responsive websites crafted for diverse industries." },
        { img: Project4, text: "Web Design & Development", description: "Explore modern, responsive websites crafted for diverse industries." },
        { img: Project5, text: "Creative Design", description: "Explore modern, responsive websites crafted for diverse industries." },
        { img: Project6, text: "E-Commerce Solutions", description: "Explore modern, responsive websites crafted for diverse industries." },
        { img: Project7, text: "E-Commerce Solutions", description: "Explore modern, responsive websites crafted for diverse industries." }
    ];

    return (
        <section className="v-section">
            <div className="container py-5">
                <div className="py-5" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="v-viral" style={{ width: "150px" }}>{t("Our Projects")}</h3>
                    <div className="d-flex justify-content-between align-items-center btn-nextline">
                        <h2 className="v-visit">{t("Our Work Speaks For Itself")}</h2>
                    </div>
                    <p className="v-info mt-2" style={{ maxWidth: "800px", wordBreak: "break-word" }}>{t("Explore our success stories in e-commerce, app development, and creative marketing. See how we've helped businesses like yours thrive.")}</p>
                    {/* ✅ Image Slider */}
                     <div data-aos="flip-left"data-aos-delay="100">
                        <Slider {...settings} className="mt-4"
                        >
                            {projects.map((item, index) => (
                                <div key={index} className="slide-item">
                                    <div className="card project-card" onClick={() => handleImageClick(item.text)}>
                                        <div className="image-overlay-container" style={{ height: "400px" }}>
                                            <img src={item.img} className="card-img-top" alt={item.text} loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div> 
                    {/* ✅ Swiper Card Effect Slider */}
                    {/*<div className="mt-5 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper project-card-size"
                        >
                            {projects.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="card project-card"
                                        onClick={() => handleImageClick(item.text)}
                                        style={{ height: '100%' }}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.text}
                                            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default OurProjects;
