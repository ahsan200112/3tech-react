import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const AppRoutes = () => {
    return (
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/creativedesign" element={<CreativeDesign />} />
          <Route path="/digitaloptimization" element={<DigitalOptimization />} />
          <Route path="/ecommercesolutions" element={<ECommerceSolution />} />
          <Route path="/marketingsolutions" element={<MarketingSolutions />} />
          <Route path="/mobileapplications" element={<MobileApplications />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </Router>
    );
};

export default AppRoutes;
