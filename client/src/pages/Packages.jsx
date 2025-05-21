import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PackagesFirstComponent from '../components/PackagesFirstComponent';
import OurPackages from '../components/OurPackages';
import CustomPackageOpinion from '../components/CustomPackageOpinion';
import OurClientsSay from '../components/OurClientsSay';

function Packages() {
  return (
    <>
      <Navbar />
      <PackagesFirstComponent />
      <OurPackages />
      <CustomPackageOpinion />
      <OurClientsSay />
      <Footer />
    </>
  );
}

export default Packages;