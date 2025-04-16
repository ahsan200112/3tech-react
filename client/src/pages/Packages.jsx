import React from 'react';
import PackagesFirstComponent from '../components/PackagesFirstComponent';
//import OurPackages from '../components/OurPackages';
import CustomPackageOpinion from '../components/CustomPackageOpinion';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import GTM from '../components/GoogleTagManager/GTM';

function Packages() {
  return (
    <>
      <GTM />
      <PackagesFirstComponent />
      {/* <OurPackages /> */}
      <CustomPackageOpinion />
      <OurClientsSay />
      <FrequentlyAskedQuestions />
    </>
  );
}

export default Packages;