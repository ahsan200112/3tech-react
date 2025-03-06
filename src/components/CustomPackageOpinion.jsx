import React from 'react';
import { useTranslation } from 'react-i18next';
import CallImg from "../assets/images/call.svg";
import LocationImg from "../assets/images/Location.svg";
import EmailImg from "../assets/images/Email.png";

const CustomPackageOpinion = () => {
    const { t, i18n } = useTranslation();
    const isRTL = document.dir === "rtl"; // Ya kisi global state se lein
    //const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section style={{ backgroundColor: "#181818" }}>
            <div className="container py-5">
                <div className="mb-4">
                    <button className="btn btn-sm o-e" style={{ color: "#3B9BE9", border: "1px solid var(--Colors-Border-Border03, #1B1264)" }}>Custom Package Option</button>
                    <h2 className="v-r mt-3">Didn’t Find What You Need? Let’s Build A <br/> Custom Package Just For You!</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-info mb-4">
                            <div className="d-flex align-items-center">
                                <img src={EmailImg} alt="Company Logo" className="img-fluid" style={{ width: "35px", height: "33px" }} />
                                <div className={isRTL ? "me-2" : "ms-2"}>
                                    <h6 className="h-o mb-0">Email</h6>
                                    <p className="h-k mb-0">Info@3tech.Sa</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info mb-4">
                            <div className="d-flex align-items-center">
                                <img src={CallImg} alt="Company Logo" className="img-fluid" style={{ width: "35px", height: "33px" }} />
                                <div className={isRTL ? "me-2" : "ms-2"}>
                                    <h6 className="h-o mb-0">Call Us On</h6>
                                    <p className="h-k mb-0">966557122917+</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="d-flex align-items-center">
                                <img src={LocationImg} alt="Company Logo" className="img-fluid" style={{ width: "35px", height: "33px" }} />
                                <div className={isRTL ? "me-2" : "ms-2"}>
                                    <h6 className="h-o">Location</h6>
                                    <p className="h-k">Saudi Arabia (KSA)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {/* <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center justify-content-between input-style">
                                        <label for="name" className="form-label text-white"> Name* </label>
                                        <input type="text" className="form-control bg-transparent text-white border-0" id="name" placeholder="" required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex input-style">
                                        <label for="email" className="form-label text-white">Email*</label>
                                        <input type="email" className="form-control bg-transparent text-white border-0" id="email" placeholder="" required />
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center justify-content-between input-style">
                                            <label for="phone" className="form-label me-2 text-white">Phone*</label>
                                            <input type="text" className="form-control bg-transparent text-white border-0" id="phone" placeholder="" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center justify-content-between input-style">
                                            <label for="subject" className="form-label me-2 text-white">Subject*</label>
                                            <input type="text" className="form-control bg-transparent text-white border-0" id="subject" placeholder="" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <div className="d-flex input-style mb-4">
                                        <label for="message" className="form-label text-white">Message*</label>
                                        <textarea className="form-control bg-transparent text-white border-0" id="message" rows="1" placeholder="" required></textarea>
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <button type="submit" className=" btn btn-sm text-white" style={{ border: "1px solid #989898", borderRadius: "15px" }}>Send Now</button>
                                    </div>
                                </div>
                            </div>
                        </form> */}
                        <form>
                            <div className="row g-3">
                                {/* Name Input */}
                                <div className="col-lg-6">
                                    <div /*className="input-style"*/ >
                                        <label htmlFor="name" className="form-label text-white">Name *</label>
                                        <input type="text" className="form-control bg-transparent text-white" id="name" required />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="col-lg-6">
                                    <div /*className="input-style"*/ >
                                        <label htmlFor="email" className="form-label text-white">Email *</label>
                                        <input type="email" className="form-control bg-transparent text-white" id="email" required />
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <div className="col-lg-6">
                                    <div /*className="input-style"*/ >
                                        <label htmlFor="phone" className="form-label text-white">Phone *</label>
                                        <input type="text" className="form-control bg-transparent text-white" id="phone" required />
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div className="col-lg-6">
                                    <div /*className="input-style"*/ >
                                        <label htmlFor="subject" className="form-label text-white">Subject *</label>
                                        <input type="text" className="form-control bg-transparent text-white" id="subject" required />
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="col-lg-12 mb-2">
                                    <div /*className="input-style"*/ >
                                        <label htmlFor="message" className="form-label text-white">Message *</label>
                                        <textarea className="form-control bg-transparent text-white" id="message" rows="2" required></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="col-lg-12 mt-3">
                                    <button type="submit" className="btn text-white px-4 py-2"
                                        style={{ border: "1px solid #989898", borderRadius: "25px" }}>
                                        Send Now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomPackageOpinion;

