import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PackagesFirstComponent from '../components/PackagesFirstComponent';
//import OurPackages from '../components/OurPackages';
import CustomPackageOpinion from '../components/CustomPackageOpinion';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

function Packages() {
  return (
    <>
      <Navbar />
      <PackagesFirstComponent />
     {/* <OurPackages /> */}
      <CustomPackageOpinion />
      <OurClientsSay />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
}

export default Packages;