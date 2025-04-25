import React, { useState, useEffect } from "react";
//import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import InkImg from "../assets/images/ink.png";
//import Girl2Img from "../assets/images/girl2.png";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook
import api from "../api/api";
import { getTestimonials } from "../api/apiEndpoints";

const OurClientsSay = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // Check if language is Arabic
  const lang = i18n.language;
  const trackEvent = useGTMEventTracker();  // Get the event tracker
  const [testimonials, setTestimonials] = useState([]);
  //const previousSlide = useRef(0); // Track the previous slide index
  // Testimonials Array
  const fetchTestimonials = async () => {
    try {
      const res = await api.get(getTestimonials);
      setTestimonials(res.data); // Save the FAQ data returned from the backend
    } catch (error) {
      console.error("Error fetching Testimonials data:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials(); // Fetch FAQs when the component mounts
  }, []);

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

  // Handle slide change event tracking
  /* const handleSlideChange = (current) => {
     trackEvent('Clients Carousel', 'Slide Change', `From Slide ${previousSlide.current} to Slide ${current}`);
     previousSlide.current = current;
   }; */

  // Handle project image click event tracking
  const handleImageClick = (personName) => {
    trackEvent('Clients Comments', 'Click', personName);
  };

  return (
    <section className="client-testimonials py-5" style={{ direction: isRTL ? "rtl" : "ltr" }} >
      <div className="container" data-aos="fade-up" data-aos-delay="500">
        <div className="mb-4">
          <button className="btn-sm v-hi" style={{ width: "230px" }}>
            {t("Real Stories, Real Impact")}
          </button>
          <h2 className="v-hence">{t("What Our Clients Say About Us")}</h2>
        </div>
        <div data-aos="flip-left" data-aos-delay="500">
          <Slider {...settings} className="slick-slider"
          //  afterChange={handleSlideChange}  // Event on slide change 
          >
            {/* Map through Testimonials */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="slide-item">
                <div className="card p-3 text-white project-card"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderRadius: "20px",
                    textAlign: isRTL ? "right" : "left",
                    minHeight: "300px", // Ensuring equal height for all cards
                  }}
                  onClick={() => handleImageClick(testimonial.name ? testimonial.name[lang] : "Unknown Name")}
                >
                  <div>
                    <img src={InkImg} alt="Brand Logo" className="img-fluid mt-2 d-inline-block"
                      style={{ width: "44px", height: "30px" }} />
                    <p className="v-cleana mt-2">
                      {testimonial.message && testimonial.message[lang] ? testimonial.message[lang] : "Default Text"}
                    </p>
                    {/* Text */}
                    <div style={{ textAlign: isRTL ? "right" : "left" }}>
                      <p className="mb-0 g-value" style={{ fontWeight: "700", fontSize: "18px" }}>
                        {testimonial.name && testimonial.name[lang] ? testimonial.name[lang] : "Unknown Name"}
                      </p>
                      <p className="mb-0 g-value">
                        {testimonial.position && testimonial.position[lang] ? testimonial.position[lang] : "Unknown Position"}
                      </p>
                    </div>
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

export default OurClientsSay;
