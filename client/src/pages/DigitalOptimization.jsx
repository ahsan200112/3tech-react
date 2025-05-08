import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalOptimizationFirstComponent from '../components/DigitalOptimizationFirstComponent';
import OurClientsSay from '../components/OurClientsSay';
import DigitalOptimizationHeroSection from '../components/DigitalOptimizationHeroSection';
import DigitalOptimizationFaqs from '../components/DigitalOptimizationFaqs';

function DigitalOptimization() {
  return (
    <>
      <Navbar />
      <DigitalOptimizationFirstComponent />
      <DigitalOptimizationHeroSection />
      <OurClientsSay />
      <DigitalOptimizationFaqs />
      <Footer />
    </>
  );
}

export default DigitalOptimization;