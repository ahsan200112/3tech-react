import React from 'react';
import { useTranslation } from 'react-i18next';


const BlogsSection = () => {
    const { t } = useTranslation();
    //const textAlignment = i18n.dir() === "rtl" ? "text-end" : "text-start"; // Check language direction
    return (
        <section className="v-section">
            <div class="container my-5">
                <button class="btn btn-sm text-start o-e">Insights, Tips, and Trends</button>
                <div class="mt-3">
                    <h2 class="text-start v-u">Explore The Latest In Digital Solutions</h2>
                    <p>Stay updated with expert insights, actionable tips, and industry trends that help you grow your <br /> business in the ever-evolving digital world.</p>
                </div>

                <div class="row">
                    <div class="col-lg-8 mb-4">
                        <div class="card custom-card">
                            <img src="./images/win.png" alt="Digital Trends" class="card-img img-fluid responsive-image" />
                            <div class="card-body" style={{ backgroundColor: "#181818" }}>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <img src="./images/calendar 1.png" alt="Calendar Icon" style={{ height: "20px", width: "20px", marginRight: "5px" }} />
                                        <small class="v-i mb-0">July 28, 2023</small>
                                    </div>
                                    <i class="bi bi-arrow-up-right text-white"></i>
                                </div>

                                <h5 class="card-title v-o mt-3">Best SEO Techniques For Ecommerce</h5>
                                <p class="card-text v-p">
                                    Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something
                                </p>
                                <p class="v-a">By Avrix</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="mb-4 input-style">
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img src="./images/search 1.png" alt="Post Image" style={{ width: "15px", height: "15px" }} />
                                <input type="text" class="form-control bg-transparent text-white border-0" placeholder="Search..." style={{flex: "1"}} />
                            </div>

                        </div>
                        <h5 class="text-start v-s">Category List</h5>
                        <ul class="category-list ps-0">
                            <li><a href="#" class="text-decoration-none v-d">E-Commerce Solutions (3)</a></li>
                            <li><a href="#" class="text-decoration-none  v-d">Mobile Applications (4)</a></li>
                            <li><a href="#" class="text-decoration-none  v-d">Marketing Solutions (4)</a></li>
                            <li><a href="#" class="text-decoration-none  v-d">Creative Design (4)</a></li>
                            <li><a href="#" class="text-decoration-none  v-d">Digital Optimization (4)</a></li>
                        </ul>
                        <h5 class="text-start mt-4 v-f">Recent Post</h5>
                        <div class="d-flex align-items-center recent-post mb-3 mt-3">
                            <img src="./images/Container (1).png" alt="Post Image" style={{ width: "70", height: "71" }} />
                            <div class="ms-3">
                                <small class="text-start  v-g">March 21, 2024</small>
                                <p class="mb-0 ">Connecting with Key <br /> Online Voices</p>
                            </div>
                        </div>

                        <div class="d-flex align-items-center recent-post mb-3">
                            <img src="./images/Container (2).png" alt="Post Image" style={{ width: "70", height: "71" }} />
                            <div class="ms-3">
                                <small class="text-start v-g">March 21, 2024</small>
                                <p class="mb-0">Creating for an On- <br />the-Go Audience</p>
                            </div>
                        </div>

                        <div class="d-flex align-items-center recent-post">
                            <img src="./images/Container (3).png" alt="Post Image" style={{ width: "70", height: "71" }} />
                            <div class="ms-3">
                                <small class="text-start v-g">March 21, 2024</small>
                                <p class="mb-0">Your Path to Audience <br /> Engagement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-8 mb-4">
                        <div class="card custom-card">
                            <img src="./images/html.png" alt="Digital Trends" class="card-img img-fluid responsive-img" />
                            <div class="card-body" style={{backgroundColor: "#181818"}}>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center">
                                        <img src="./images/calendar 1.png" alt="Calendar Icon" style={{ height: "20px", width: "20px", marginRight: "5px" }} />
                                        <small class="v-i mb-0">July 28, 2023</small>
                                    </div>
                                    <i class="bi bi-arrow-up-right text-white"></i>
                                </div>
                                <h5 class="card-title v-o mt-3">Best SEO Techniques For Ecommerce</h5>
                                <p class="card-text v-p">
                                    Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something
                                </p>
                                <p class="v-a">By Avrix</p>
                            </div>
                        </div>
                    </div>
                    <div class="container my-5">
                        <div class="row">
                            <div class="col-lg-8 mb-4">
                                <div class="card custom-card">
                                    <img src="./images/er.png" alt="Digital Trends" class="card-img img-fluid" />
                                    <div class="card-body" style={{ backgroundColor: "#181818" }}>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <img src="./images/calendar 1.png" alt="Calendar Icon" style={{ height: "20px", width: "20px", marginRight: "5px" }} />
                                                <small class="v-i mb-0">July 28, 2023</small>
                                            </div>
                                            <i class="bi bi-arrow-up-right text-white"></i>
                                        </div>

                                        <h5 class="card-title v-o mt-3">Best SEO Techniques For Ecommerce</h5>
                                        <p class="card-text v-p">
                                            Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something
                                        </p>
                                        <p class="v-a">By Avrix</p>

                                    </div>
                                </div>
                            </div>
                            <div class="container my-5">
                                <div class="row">
                                    <div class="col-lg-8 mb-4">
                                        <div class="card custom-card">
                                            <img src="./images/bn.png" alt="Digital Trends" class="card-img img-fluid" />
                                            <div class="card-body" style={{ backgroundColor: "#181818" }}>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <img src="./images/calendar 1.png" alt="Calendar Icon" style={{ height: "20px", width: "20px", marginRight: "5px" }} />
                                                        <small class="v-i mb-0">July 28, 2023</small>
                                                    </div>
                                                    <i class="bi bi-arrow-up-right text-white"></i>
                                                </div>
                                                <h5 class="card-title v-o mt-3">Best SEO Techniques For Ecommerce</h5>
                                                <p class="card-text v-p">
                                                    Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something
                                                </p>
                                                <p class="v-a">By Avrix</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;

