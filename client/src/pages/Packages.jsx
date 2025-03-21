import React from 'react';
import PackagesFirstComponent from '../components/PackagesFirstComponent';
import OurPackages from '../components/OurPackages';
import CustomPackageOpinion from '../components/CustomPackageOpinion';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

function Packages() {
  return (
    <>
      <PackagesFirstComponent />
      <OurPackages />
      <CustomPackageOpinion />
      <OurClientsSay />
      <FrequentlyAskedQuestions />
    </>
  );
}

export default Packages;