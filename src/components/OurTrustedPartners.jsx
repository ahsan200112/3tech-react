import React from 'react';
import { useTranslation } from 'react-i18next';
import F1Img from "../assets/images/1f.png";
import F2Img from "../assets/images/2f.png";
import F3Img from "../assets/images/3f.png";
import F4Img from "../assets/images/4f.png";
import F5Img from "../assets/images/5f.png";
import F6Img from "../assets/images/6f.png";
import F7mg from "../assets/images/7f.png";
import F8Img from "../assets/images/8f.png";

const OurTrustedPartners = () => {
  const { t } = useTranslation();
  // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
  return (
    <section className="trusted-partners py-5">
      <div className="container">
        <button className="btn-sm v-were" style={{ width: "205px"}}>{t("Be Part of Our Journey")}</button>
        <h2 className="v-value">{t("Our Trusted Partners")}</h2>
        <p className="v-auto">
          {t("We collaborate with exceptional partners who help us deliver luxury and unforgettable experiences. Together, we craft excellence, from premium services to world-class hospitality, ensuring every visit is extraordinary.")}
        </p>
      </div>
      <div className="container">
        <div className="row text-center g-4 mt-3">
          <img src={F1Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={F2Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={F3Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={F4Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
        </div>
        <div className="row text-center g-4 mt-3">
          <img src={F5Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={F6Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={F7mg} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
          <img src={F8Img} alt="Madfu" className="img-fluid" style={{ height: "152px", width: "282px" }} />
        </div>
      </div>
    </section>
  );
};

export default OurTrustedPartners;
