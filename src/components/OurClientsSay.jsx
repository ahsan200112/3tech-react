import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import InkImg from "../assets/images/ink.png";
import Girl2Img from "../assets/images/girl2.png";

const OurClientsSay = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // Check if language is Arabic
  // Testimonials Array
  const testimonials = [
    {
      id: 1,
      text: t("Working with 3Tech has been a game-changer for our business. They transformed our online store with a beautiful, user-friendly design and seamless functionality."),
      name: "Sarah L",
      position: t("Founder of Luxe Appeal"),
      image: Girl2Img,
    },
    {
      id: 2,
      text: t("3Tech exceeded our expectations. Their expertise in web development and design gave us a professional online presence that attracts more customers."),
      name: "David M",
      position: t("CEO of Tech Solutions"),
      image: Girl2Img,
    },
    {
      id: 3,
      text: t("What sets 3Tech apart is their commitment to understanding our business goals and aligning their solutions accordingly. I am working as Marketing Manager"),
      name: "Emily R",
      position: t("Marketing Manager at Digital World"),
      image: Girl2Img,
    },
    {
      id: 4,
      text: t("Their team is highly skilled and delivers projects on time. The support and communication have been outstanding throughout the process."),
      name: "John D",
      position: t("Founder of InnovateX"),
      image: Girl2Img,
    },
    {
      id: 5,
      text: t("They helped us create a beautiful brand identity, and our customer retention has significantly improved. I am COO of FutureWave."),
      name: "Linda K",
      position: t("COO of FutureWave"),
      image: Girl2Img,
    },
  ];

  return (
    <section className="client-testimonials py-5" style={{ direction: isRTL ? "rtl" : "ltr" }} >
      <div className="container">
        <div className="mb-4">
          <button className="btn-sm v-hi" style={{ width: "215px" }}>
            {t("Real Stories, Real Impact")}
          </button>
          <h2 className="v-hence">{t("What Our Clients Say About Us")}</h2>
        </div>

        {/* Swiper Component */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3} // Default to 3 slides
          navigation
          pagination={{ clickable: true }}
          centeredSlides={false}
          rtl={isRTL} // Enable RTL mode
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
                }}
              >
                <img src={InkImg} alt="Brand Logo" className="img-fluid mt-2"
                  style={{ width: "44px", height: "30px" }} />
                <p className="v-clean mt-2">{t(testimonial.text)}</p>

                {/* Image + Text Alignment */}
                <div className="d-flex align-items-center"
                  style={{ flexDirection: "row" }}>
                  {/* Image */}
                  <img src={testimonial.image} alt={testimonial.name}
                    className="img-fluid"
                    style={{
                      width: "47px",
                      height: "47px",
                      borderRadius: "50%",
                      marginLeft: "7px",
                      marginRight: "7px",
                    }}
                  />
                  {/* Text */}
                  <div>
                    <p className="mb-0 g-value" style={{fontWeight:"700", fontSize:"18px"}}>{t(testimonial.name)}</p>
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
