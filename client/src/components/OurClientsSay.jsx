import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import InkImg from "../assets/images/ink.png";
//import Girl2Img from "../assets/images/girl2.png";
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';  // Import the custom hook

const OurClientsSay = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // Check if language is Arabic
  const trackEvent = useGTMEventTracker();  // Get the event tracker
  // Testimonials Array
  const testimonials = [
    {
      id: 1,
      text: t("Thank you for your perfect work and achievement in a short period of time. The team is professional and cooperative, and the support service is excellent. Thank you."),
      name: t("Abdullah"),
      position: t("CEO of Osus"),
      // image: Girl2Img,
    },
    {
      id: 2,
      text: t("I worked with them to set up an online store. Their attention to detail, their amazing designs, their constant communication, and their expertise in sponsored ads are all things that set them apart from other platforms. I wish them success."),
      name: t("Omar"),
      position: t("Store Manager of One Me"),
      // image: Girl2Img,
    },
    {
      id: 3,
      text: t("They are really excellent. They help you with everything, thinking with you until you find the right thing for you. All the best to you."),
      name: t("Mahdi"),
      position: t("Operations Manager of Waad"),
      //image: Girl2Img,
    },
    {
      id: 4,
      text: t("The marketing team has extensive experience and is attentive to the smallest details. The dealings were very polite and ethical."),
      name: t("Talal"),
      position: t("Marketing Manager of Awtar"),
      //image: Girl2Img,
    },
  ];

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
  const handleSlideChange = (current, next) => {
    trackEvent('Clients Carousel', 'Slide Change', `From Slide ${current} to Slide ${next}`);
  };

  // Handle project image click event tracking
  const handleImageClick = (personName) => {
    trackEvent('Clients Comments', 'Click', personName);
  };

  return (
    <section className="client-testimonials py-5" style={{ direction: isRTL ? "rtl" : "ltr" }} >
      <div className="container" data-aos="fade-up" data-aos-delay="600">
        <div className="mb-4">
          <button className="btn-sm v-hi" style={{ width: "230px" }}>
            {t("Real Stories, Real Impact")}
          </button>
          <h2 className="v-hence">{t("What Our Clients Say About Us")}</h2>
        </div>
        <div data-aos="flip-left" data-aos-delay="600">
          <Slider {...settings} className="slick-slider"
            afterChange={handleSlideChange}  // Event on slide change
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
                  onClick={() => handleImageClick(testimonial.name)}
                >
                  <div>
                    <img src={InkImg} alt="Brand Logo" className="img-fluid mt-2 d-inline-block"
                      style={{ width: "44px", height: "30px" }} />
                    <p className="v-cleana mt-2">{t(testimonial.text)}</p>
                    {/* Text */}
                    <div style={{ textAlign: isRTL ? "right" : "left" }}>
                      <p className="mb-0 g-value" style={{ fontWeight: "700", fontSize: "18px" }}>{t(testimonial.name)}</p>
                      <p className="mb-0 g-value">{t(testimonial.position)}</p>
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
