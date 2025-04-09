import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/slider.css"; // Custom CSS file
import F1Img from "../assets/images/1f.png";
import F2Img from "../assets/images/2f.png";
import F3Img from "../assets/images/3f.png";
import F4Img from "../assets/images/4f.png";
import F5Img from "../assets/images/5f.png";
import F6Img from "../assets/images/6f.png";
import F7Img from "../assets/images/7f.png";
import F8Img from "../assets/images/8f.png";
import F1ImgLight from '../assets/images/F1Light.png';
import F2ImgLight from '../assets/images/F2Light.png';
import F3ImgLight from '../assets/images/F3Light.png';
import F4ImgLight from '../assets/images/F4Light.png';
import F5ImgLight from '../assets/images/F5Light.png';
import F6ImgLight from '../assets/images/F6Light.png';
import F7ImgLight from '../assets/images/F7Light.png';
import F8ImgLight from '../assets/images/F8Light.png';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const OurTrustedPartners = () => {
  const { t } = useTranslation();
  const { theme } = useTheme(); // Get theme from context
  // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
  const trackEvent = useGTMEventTracker();  // Get the event tracker
  const previousSlide = useRef(0); // Track the previous slide index

  const images = [
    { light: F1ImgLight, dark: F1Img },
    { light: F2ImgLight, dark: F2Img },
    { light: F3ImgLight, dark: F3Img },
    { light: F4ImgLight, dark: F4Img },
    { light: F5ImgLight, dark: F5Img },
    { light: F6ImgLight, dark: F6Img },
    { light: F7ImgLight, dark: F7Img },
    { light: F8ImgLight, dark: F8Img },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Disable side arrows
    /*  nextArrow: <NextArrow theme={theme} />,
      prevArrow: <PrevArrow theme={theme} />, */
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Handle slide change event tracking
  const handleSlideChange = (current) => {
    trackEvent('Our Partners Carousel', 'Slide Change', `From Slide ${previousSlide.current} to Slide ${current}`);
    previousSlide.current = current;
  };

  // Handle project image click event tracking
  const handleImageClick = (ImgName) => {
    trackEvent('Our Partners', 'Click', ImgName);
  };

  return (
    <section className="trusted-partners py-5">
      <div className="container" data-aos="fade-down" data-aos-delay="400">
        <button className="btn-sm v-were" style={{ width: "205px" }}>{t("Be Part of Our Journey")}</button>
        <h2 className="v-value">{t("Our Trusted Partners")}</h2>
        <p className="v-auto">
          {t("We collaborate with exceptional partners who help us deliver luxury and unforgettable experiences. Together, we craft excellence, from premium services to world-class hospitality, ensuring every visit is extraordinary.")}
        </p>
      </div>
      {/*
      <div className="container">
        <div className="row text-center g-4 mt-3">
          <img src={theme === "light" ? F1ImgLight : F1Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={theme === "light" ? F2ImgLight : F2Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={theme === "light" ? F3ImgLight : F3Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={theme === "light" ? F4ImgLight : F4Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
        </div>
        <div className="row text-center g-4 mt-3">
          <img src={theme === "light" ? F5ImgLight : F5Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={theme === "light" ? F6ImgLight : F6Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={theme === "light" ? F7ImgLight : F7Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={theme === "light" ? F8ImgLight : F8Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
        </div>
      </div>
      */}
      <div className="container mt-4 py-4" data-aos="flip-left" data-aos-delay="500">
        <Slider {...settings}
          afterChange={handleSlideChange}  // Event on slide change
        >
          {images.map((img, index) => (
            <div key={index} className="text-center">
              <img
                src={theme === "light" ? img.light : img.dark}
                alt="Partner Logo"
                className="img-fluid"
                style={{ height: "152px", width: "282px", margin: "auto" }}
                onClick={() => handleImageClick(img)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurTrustedPartners;
