import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
//import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import InkImg from "../assets/images/ink.png";
//import Girl2Img from "../assets/images/girl2.png";

const OurClientsSay = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // Check if language is Arabic
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

  return (
    <section className="client-testimonials py-5" style={{ direction: isRTL ? "rtl" : "ltr" }} >
      <div className="container">
        <div className="mb-4">
          <button className="btn-sm v-hi" style={{ width: "230px" }}>
            {t("Real Stories, Real Impact")}
          </button>
          <h2 className="v-hence">{t("What Our Clients Say About Us")}</h2>
        </div>

        {/* Swiper Component */}
        <Swiper
          //  modules={[Pagination, Navigation]}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3} // Default to 3 slides
          // navigation
          pagination={{ clickable: true }}
          centeredSlides={false}
          rtl={isRTL ? "true" : "false"}
          autoplay={{
            delay: 1000, // 1 second delay
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile: 1 slide
            768: { slidesPerView: 2 }, // Tablet: 2 slides
            1024: { slidesPerView: 3 }, // Desktop: 3 slides
            1440: { slidesPerView: 4 }, // Large screens: 4 slides
          }}
          className="swiper-container"
        >
          {/* Map through Testimonials */}
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="card p-3 shadow text-white"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderRadius: "20px",
                  textAlign: isRTL ? "right" : "left",
                  minHeight: "250px", // Ensuring equal height for all cards
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Spacing elements properly
                }}
              >
                <img src={InkImg} alt="Brand Logo" className="img-fluid mt-2"
                  style={{ width: "44px", height: "30px" }} />
                <p className="v-clean mt-2">{t(testimonial.text)}</p>

                {/* Image + Text Alignment */}
                <div className="d-flex align-items-center"
                  style={{ flexDirection: "row" }}>
                  {/* Image */}
                  {/* <img src={testimonial.image} alt={testimonial.name}
                    className="img-fluid"
                    style={{
                      width: "47px",
                      height: "47px",
                      borderRadius: "50%",
                      marginLeft: "7px",
                      marginRight: "7px",
                    }}
                  /> */}
                  {/* Text */}
                  <div>
                    <p className="mb-0 g-value" style={{ fontWeight: "700", fontSize: "18px" }}>{t(testimonial.name)}</p>
                    <p className="mb-0 g-value">{t(testimonial.position)}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClientsSay;
