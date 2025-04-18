import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalOptimizationFirstComponent from '../components/DigitalOptimizationFirstComponent';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import DigitalOptimizationHeroSection from '../components/DigitalOptimizationHeroSection';

function DigitalOptimization() {
  return (
    <>
      <Navbar />
      <DigitalOptimizationFirstComponent />
      <DigitalOptimizationHeroSection />
      <OurClientsSay />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
}

export default DigitalOptimization;