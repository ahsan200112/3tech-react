import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Packages from '../pages/Packages';
import Blogs from '../pages/Blogs';
import Blogs1 from '../pages/Blogs1';
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
import Login from '../pages/Login/Login';
import Services1 from '../pages/Services1';
import Projects1 from '../pages/Projects1';
import Packages1 from '../pages/Packages1';
//import Signup from '../pages/Signup/Signup';

const PublicRoutes = () => {
  const location = useLocation();

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
      <GTMPageViewTracker />
      <GTMPageReloadTracker />
      <ScrollToTop />
      <Routes>
        <Route path="/dashboard-login" element={<Login />} />
       {/* <Route path="/signup" element={<Signup />} />  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services1" element={<Services1 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects1" element={<Projects1 />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages1" element={<Packages1 />} />
        <Route path="/blogs" element={<Blogs />} /> 
        <Route path="/blogs1" element={<Blogs1 />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/creativedesign" element={<CreativeDesign />} />
        <Route path="/digitaloptimization" element={<DigitalOptimization />} />
        <Route path="/ecommercesolutions" element={<ECommerceSolution />} />
        <Route path="/marketingsolutions" element={<MarketingSolutions />} />
        <Route path="/mobileapplications" element={<MobileApplications />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
