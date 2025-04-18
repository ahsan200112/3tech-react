import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import WhoWeAre from '../components/WhoWeAre';
import OurServices from '../components/OurServices';
import YourSuccessOurPriority from '../components/YourSuccessOurPriority';
import OurProjects from '../components/OurProjects';
import OurTrustedPartners from '../components/OurTrustedPartners';
import OurClientsSay from '../components/OurClientsSay';
//import OurPackages from '../components/OurPackages';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <OurServices />
      <YourSuccessOurPriority />
      <OurProjects />
      <OurTrustedPartners />
      <OurClientsSay />
      {/* <OurPackages/> */}
      <Footer />
    </>
  );
}

export default Home;