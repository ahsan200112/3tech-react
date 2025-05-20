import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalOptimizationFirstComponent from '../components/DigitalOptimizationFirstComponent';
import OurClientsSay from '../components/OurClientsSay';
import DigitalOptimizationHeroSection from '../components/DigitalOptimizationHeroSection';
//import DigitalOptimizationFaqs from '../components/DigitalOptimizationFaqs';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

function DigitalOptimization() {
  return (
    <>
      <Navbar />
      <DigitalOptimizationFirstComponent />
      <DigitalOptimizationHeroSection />
      <OurClientsSay />
      {/*<DigitalOptimizationFaqs /> */}
      <FrequentlyAskedQuestions/>
      <Footer />
    </>
  );
}

export default DigitalOptimization;