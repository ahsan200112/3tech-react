import React from 'react';
import { useTranslation } from 'react-i18next';
import TopImg from "../assets/images/top.png";
import LapImg from "../assets/images/lap.png";
import ParImg from "../assets/images/par.png";


const OurProjectsDetail = () => {
    const { t } = useTranslation();
    // const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="v-section" style={{ marginTop: "-48px" }}>
            <div className="container my-5 py-4">
                <button className="btn btn-sm o-e mt-5" style={{ color: "#3B9BE9", width: "110px", border: "1px solid var(--Colors-Border-Border03, #1B1264)"}}>Our Projects</button>
                <h2 className="n-w ">Showcasing Excellence Across Industries</h2>
                <p className="n-e ">
                    At 3Tech, every project is a reflection of our commitment to innovation, quality, and client success. Explore how we’ve<br /> helped businesses grow and thrive in the digital world.
                </p>
                {/*<div className="row">
                    <div className="d-flex justify-content-around align-items-center flex-wrap">
                        <h2 className="text-start c-n">All | </h2>
                        <p className="c-m">E-Commerce Solutions | </p>
                        <p className="c-m">Mobile Applications | </p>
                        <p className="c-m">Marketing Solutions | </p>
                        <p className="c-m">Creative Design | </p>
                        <p className="c-m">Digital Optimization</p>
                    </div>
                </div> */}
                <div className="row">
                    <div className="d-flex justify-content-around align-items-center flex-wrap">
                        {[
                            "All",
                            "E-Commerce Solutions",
                            "Mobile Applications",
                            "Marketing Solutions",
                            "Creative Design",
                            "Digital Optimization"
                        ].map((item, index, array) => (
                            <React.Fragment key={index}>
                                <p className="c-m">{item}</p>
                                {index !== array.length - 1 && <span className="mx-2 mb-4" style={{color:" #989898"}}>|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">E-Commerce Solutions</div>
                            <img src={TopImg} class="card-img-top" alt="Project Image" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0 text-white">Web Design & Development</h5>
                                    <i className="bi bi-arrow-up-right text-white"></i>
                                </div>
                                <p className="card-text n-t">Explore modern, responsive websites crafted for<br /> diverse industries.</p>
                                <div className="tags n-y">
                                    <span>UI & UX Design</span>
                                    <span>Web Design</span>
                                    <span>Graphic Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">Creative Design</div>
                            <img src={LapImg} className="card-img-top" alt="Project Image" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0 text-white">Web Design & Development</h5>
                                    <i className="bi bi-arrow-up-right text-white"></i>
                                </div>
                                <p className="card-text n-t">Explore modern, responsive websites crafted for<br /> diverse industries.</p>
                                <div className="tags n-y">
                                    <span>UI & UX Design</span>
                                    <span>Web Design</span>
                                    <span>Graphic Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">Mobile Applications</div>
                            <img src={LapImg} className="card-img-top" alt="Project Image" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0 text-white">Web Design & Development</h5>
                                    <i className="bi bi-arrow-up-right text-white"></i>
                                </div>
                                <p className="card-text n-t">Explore modern, responsive websites crafted for<br /> diverse industries.</p>
                                <div className="tags n-y">
                                    <span>UI & UX Design</span>
                                    <span>Web Design</span>
                                    <span>Graphic Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">Creative Design</div>
                            <img src={ParImg} className="card-img-top" alt="Project Image" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0 text-white">Web Design & Development</h5>
                                    <i className="bi bi-arrow-up-right text-white"></i>
                                </div>
                                <p className="card-text n-t">Explore modern, responsive websites crafted for<br /> diverse industries.</p>
                                <div className="tags n-y">
                                    <span>UI & UX Design</span>
                                    <span>Web Design</span>
                                    <span>Graphic Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">Creative Design</div>
                            <img src={TopImg} className="card-img-top" alt="Project Image" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0 text-white">Web Design & Development</h5>
                                    <i className="bi bi-arrow-up-right text-white"></i>
                                </div>
                                <p className="card-text n-t">Explore modern, responsive websites crafted for<br /> diverse industries.</p>
                                <div className="tags n-y">
                                    <span>UI & UX Design</span>
                                    <span>Web Design</span>
                                    <span>Graphic Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card project-card position-relative" style={{ backgroundColor: "#181818" }}>
                            <div className="tag">Mobile Application</div>
                            <img src={ParImg} className="card-img-top" alt="Project Image" style={{ width: "588px", height: "350px" }} />
                            <div className="card-content">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title n-r mb-0 text-white">Web Design & Development</h5>
                                    <i className="bi bi-arrow-up-right text-white"></i>
                                </div>
                                <p className="card-text n-t">Explore modern, responsive websites crafted for<br /> diverse industries.</p>
                                <div className="tags n-y">
                                    <span>UI & UX Design</span>
                                    <span>Web Design</span>
                                    <span>Graphic Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default OurProjectsDetail;

