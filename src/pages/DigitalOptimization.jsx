import React from 'react';
import DigitalOptimizationFirstComponent from '../components/DigitalOptimizationFirstComponent';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import DigitalOptimizationHeroSection from '../components/DigitalOptimizationHeroSection';

function DigitalOptimization() {
  return (
    <>
      <DigitalOptimizationFirstComponent/>
      <DigitalOptimizationHeroSection/>
      <OurClientsSay/>
      <FrequentlyAskedQuestions/>
    </>
  );
}

export default DigitalOptimization;