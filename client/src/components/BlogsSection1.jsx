import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../api/api';
import { getBlogs } from '../api/apiEndpoints'
import Calender1Img from '../assets/images/calendar 1.png';
import Search1Img from '../assets/images/search 1.png';
import Container1Img from '../assets/images/Container (1).png';
import Container2Img from '../assets/images/Container (2).png';
import Container3Img from '../assets/images/Container (3).png';
import useGTMEventTracker from './GoogleTagManager/useGTMEventTracker';

const BlogsSection1 = () => {
    const { t, i18n } = useTranslation();
    const RTL = i18n.dir() === "rtl";
    const lang = i18n.language;
    const trackEvent = useGTMEventTracker();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        api.get(getBlogs)
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
            });
    }, []);

    const handleBlogClick = (eventLabel) => {
        trackEvent('click on blogs', 'Blog Section', 'Click', eventLabel);
    };

    return (
        <section className="v-section">
            <div className="container py-5">
                <h3 className="u-vise">{t("Insights, Tips, and Trends")}</h3>
                <div className="mt-3">
                    <h2 className="v-u">{t("Explore The Latest In Digital Solutions")}</h2>
                    <p className="v-p" style={{ maxWidth: "670px", wordBreak: "break-word" }}>
                        {t("Stay updated with expert insights, actionable tips, and industry trends that help you grow your business in the ever-evolving digital world.")}
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-8 mb-4" data-aos="fade-up" data-aos-delay="300">
                        {blogs.map(blog => (
                            <div key={blog._id} className="card custom-card mb-4"
                                onClick={() => handleBlogClick(blog.title[lang])}
                            >
                                <img src={blog.image} alt={blog.title[lang]} className="card-img img-fluid responsive-image"
                                    style={{ width: '792px', height: '450px' }} />
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img src={Calender1Img} alt="Calendar Icon" style={{
                                                height: "20px", width: "20px", marginRight: RTL ? "0px" : "7px",
                                                marginLeft: RTL ? "7px" : "0px"
                                            }} />
                                            <small className="v-i mb-0">{new Date(blog.date).toLocaleDateString()}</small>
                                        </div>
                                        <i className="bi bi-arrow-up-right text-primary-color"></i>
                                    </div>

                                    <h5 className="v-o mt-3">{t(blog.title[lang])}</h5>
                                    <p className="card-text v-p">{t(blog.description[lang])}</p>
                                    <p className="v-a">{t("By")} {blog.author[lang] || "Avrix"}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="mb-4 custom-padding-h custom-content-center">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={Search1Img} alt="Post" style={{ width: "15px", height: "15px" }} />
                                <input type="text" className="form-control bg-transparent border-0 custom-placeholder" placeholder={t("Search")}
                                    style={{ flex: "1", color: "var(--text-secondary)" }} />
                            </div>
                        </div>

                        <h5 className="v-s">{t("Category List")}</h5>
                        <ul className="category-list ps-0 pe-0">
                            {/* These can also be dynamic later */}
                            <li className='custom-padding-h'><a href="ecommercesolutions" className="text-decoration-none v-d"
                                onClick={() => handleBlogClick('E-Commerce Solutions')}
                            >{t("E-Commerce Solutions (3)")}</a></li>
                            <li className='custom-padding-h'><a href="mobileapplications" className="text-decoration-none v-d"
                                onClick={() => handleBlogClick('Mobile Applications')}
                            >{t("Mobile Applications (4)")}</a></li>
                            <li className='custom-padding-h'><a href="marketingsolutions" className="text-decoration-none v-d"
                                onClick={() => handleBlogClick('Marketing Solutions')}
                            >{t("Marketing Solutions (4)")}</a></li>
                            <li className='custom-padding-h'><a href="creativedesign" className="text-decoration-none v-d"
                                onClick={() => handleBlogClick('Creative Design')}
                            >{t("Creative Design (4)")}</a></li>
                            <li className='custom-padding-h'><a href="digitaloptimization" className="text-decoration-none v-d"
                                onClick={() => handleBlogClick('Digital Optimization')}
                            >{t("Digital Optimization (4)")}</a></li>
                        </ul>

                        <h5 className="mt-4 v-f">{t("Recent Post")}</h5>
                        <div className="d-flex align-items-center recent-post mb-3 mt-3 custom-padding-h custom-content-center">
                            <img className="custom-margin-img" src={Container1Img} alt="Post" style={{ width: "70", height: "71" }} />
                            <div className="ms-3 me-3">
                                <small className="v-g">March 21, 2024</small>
                                <p className="mb-0 v-p" style={{ maxWidth: "130px", wordBreak: "break-word" }}
                                    onClick={() => handleBlogClick('Connecting with Key Online Voices')}
                                >{t("Connecting with Key Online Voices")}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center recent-post mb-3 custom-padding-h custom-content-center">
                            <img className="custom-margin-img" src={Container2Img} alt="Post" style={{ width: "70", height: "71" }} />
                            <div className="ms-3 me-3">
                                <small className="v-g">March 21, 2024</small>
                                <p className="mb-0 v-p" style={{ maxWidth: "130px", wordBreak: "break-word" }}
                                    onClick={() => handleBlogClick('Creating for an On-the-Go Audience')}
                                >{t("Creating for an On-the-Go Audience")}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center recent-post custom-padding-h custom-content-center">
                            <img className="custom-margin-img" src={Container3Img} alt="Post" style={{ width: "70", height: "71" }} />
                            <div className="ms-3 me-3">
                                <small className="v-g">March 21, 2024</small>
                                <p className="mb-0 v-p" style={{ maxWidth: "130px", wordBreak: "break-word" }}
                                    onClick={() => handleBlogClick('Your Path to Audience Engagement')}
                                >{t("Your Path to Audience Engagement")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsSection1;
