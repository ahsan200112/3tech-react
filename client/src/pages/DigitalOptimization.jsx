import React from 'react';
import DigitalOptimizationFirstComponent from '../components/DigitalOptimizationFirstComponent';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import DigitalOptimizationHeroSection from '../components/DigitalOptimizationHeroSection';
import GTM from '../components/GoogleTagManager/GTM';

function DigitalOptimization() {
  return (
    <>
      <GTM />
      <DigitalOptimizationFirstComponent />
      <DigitalOptimizationHeroSection />
      <OurClientsSay />
      <FrequentlyAskedQuestions />
    </>
  );
}

export default DigitalOptimization;