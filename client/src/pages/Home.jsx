import React from 'react';
import HeroSection from '../components/HeroSection';
import WhoWeAre from '../components/WhoWeAre';
import OurServices from '../components/OurServices';
import YourSuccessOurPriority from '../components/YourSuccessOurPriority';
import OurProjects from '../components/OurProjects';
import OurTrustedPartners from '../components/OurTrustedPartners';
import OurClientsSay from '../components/OurClientsSay';
import GTM from '../components/GoogleTagManager/GTM';
//import OurPackages from '../components/OurPackages';

function Home() {
  return (
    <>
      <GTM />
      <HeroSection />
      <WhoWeAre />
      <OurServices />
      <YourSuccessOurPriority />
      <OurProjects />
      <OurTrustedPartners />
      <OurClientsSay />
      {/* <OurPackages/> */}
    </>
  );
}

export default Home;