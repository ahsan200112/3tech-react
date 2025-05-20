import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Packages from '../pages/Packages';
//import Blogs from '../pages/Blogs';
import ContactUs from '../pages/ContactUs';
import CreativeDesign from '../pages/CreativeDesign';
import DigitalOptimization from '../pages/DigitalOptimization';
import ECommerceSolution from '../pages/E-commerceSolutions';
import MarketingSolutions from '../pages/MarketingSolutions';
import MobileApplications from '../pages/MobileApplications';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndConditions from '../pages/TermsAndConditions';
import ScrollToTop from "../components/ScrollToTop";
import ThankYou from '../pages/ThankYou';
import GTMPageViewTracker from '../components/GoogleTagManager/GTMPageViewTracker';
import GTMPageReloadTracker from '../components/GoogleTagManager/GTMPageReloadTracker';
//import Login from '../pages/Login/Login';
import ChatBot from '../components/ChatBot';
//import Signup from '../pages/Signup/Signup';
import NotFound from '../components/404NotFound';

const PublicRoutes = () => {
  const location = useLocation();
  const allowedPaths = [
    "/", "/about", "/services", "/projects",
    "/packages", "/contact", "/blogs",
    "/creativedesign", "/digitaloptimization", "/ecommercesolutions",
    "/marketingsolutions", "/mobileapplications", "/privacypolicy", "/termsandconditions", "/thankyou"
  ];

  const shouldShowChatBot = allowedPaths.includes(location.pathname);

  useEffect(() => {
    // Push route change event to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'VirtualPageView',
      pagePath: location.pathname,
      pageTitle: document.title,
      timestamp: new Date().toISOString()
    });
  }, [location]);

  return (
    <>
      {shouldShowChatBot && <ChatBot />}
      <GTMPageViewTracker />
      <GTMPageReloadTracker />
      <ScrollToTop />
      <Routes>
        {/*<Route path="/dashboard-login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} />  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/packages" element={<Packages />} />
       {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/creativedesign" element={<CreativeDesign />} />
        <Route path="/digitaloptimization" element={<DigitalOptimization />} />
        <Route path="/ecommercesolutions" element={<ECommerceSolution />} />
        <Route path="/marketingsolutions" element={<MarketingSolutions />} />
        <Route path="/mobileapplications" element={<MobileApplications />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
