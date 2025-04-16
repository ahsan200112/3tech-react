import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Packages from '../pages/Packages';
import Blogs from '../pages/Blogs';
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
import GTM from '../components/GoogleTagManager/GTM';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<><GTM /><Home /></>} />
        <Route path="/about" element={<><GTM /><AboutUs /></>} />
        <Route path="/services" element={<><GTM /><Services /></>} />
        <Route path="/projects" element={<><GTM /><Projects /></>} />
        <Route path="/packages" element={<><GTM /><Packages /></>} />
        <Route path="/blogs" element={<><GTM /><Blogs /></>} />
        <Route path="/contact" element={<><GTM /><ContactUs /></>} />
        <Route path="/creativedesign" element={<><GTM /><CreativeDesign /></>} />
        <Route path="/digitaloptimization" element={<><GTM /><DigitalOptimization /></>} />
        <Route path="/ecommercesolutions" element={<><GTM /><ECommerceSolution /></>} />
        <Route path="/marketingsolutions" element={<><GTM /><MarketingSolutions /></>} />
        <Route path="/mobileapplications" element={<><GTM /><MobileApplications /></>} />
        <Route path="/privacypolicy" element={<><GTM /><PrivacyPolicy /></>} />
        <Route path="/termsandconditions" element={<><GTM /><TermsAndConditions /></>} />
        <Route path="/thankyou" element={<><GTM /><ThankYou /></>} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
