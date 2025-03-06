import React from 'react';
import { useTranslation } from 'react-i18next';
import CallImg from "../assets/images/call.svg";
import LocationImg from "../assets/images/Location.svg";
import EmailImg from "../assets/images/Email.png";

const GetContactNow2 = () => {
    const { t, i18n } = useTranslation();
    const isRTL = document.dir === "rtl"; // Ya kisi global state se lein
    //const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section style={{ backgroundColor: "#181818" }}>
            <div className="container py-5">
                <div className="mb-4">
                    <button className="btn btn-sm o-e" style={{ color: "#3B9BE9", border: "1px solid var(--Colors-Border-Border03, #1B1264)" }}>Get Contact Now</button>
                    <h2 className="v-r mt-3">Lets Bring Your Vision Into Reality</h2>
                    <p className="b-c">Your email address will not be published. Required fields are marked *</p>
                </div>
                {/* Full-width Form */}
                <div className="row">
                    <div className="col-md-12"> {/* Wider Form */}
                        <form>
                            <div className="row g-3">
                                {/* Name Input */}
                                <div className="col-lg-6">
                                    <label htmlFor="name" className="form-label text-white">Name *</label>
                                    <input type="text" className="form-control bg-transparent text-white" id="name" required />
                                </div>

                                {/* Email Input */}
                                <div className="col-lg-6">
                                    <label htmlFor="email" className="form-label text-white">Email *</label>
                                    <input type="email" className="form-control bg-transparent text-white" id="email" required />
                                </div>

                                {/* Phone Input */}
                                <div className="col-lg-6">
                                    <label htmlFor="phone" className="form-label text-white">Phone *</label>
                                    <input type="text" className="form-control bg-transparent text-white" id="phone" required />
                                </div>

                                {/* Subject Input */}
                                <div className="col-lg-6">
                                    <label htmlFor="subject" className="form-label text-white">Subject *</label>
                                    <input type="text" className="form-control bg-transparent text-white" id="subject" required />
                                </div>

                                {/* Message Input */}
                                <div className="col-lg-12 mb-2">
                                    <label htmlFor="message" className="form-label text-white">Message *</label>
                                    <textarea className="form-control bg-transparent text-white" id="message" rows="3" required></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="col-lg-12 mt-3">
                                    <button type="submit" className="btn text-white px-5 py-2"
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

export default GetContactNow2;

