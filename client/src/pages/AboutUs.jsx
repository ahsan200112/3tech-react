import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutFirstComponent from '../components/AboutFirstComponent';
import ExpertiseYouCanTrust from '../components/ExpertiseYouCanTrust';
import YourSuccessOurPriority from '../components/YourSuccessOurPriority';
import OurTrustedPartners from '../components/OurTrustedPartners';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutFirstComponent />
      <ExpertiseYouCanTrust />
      <OurTrustedPartners />
      <YourSuccessOurPriority />
      <OurClientsSay />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
}

export default AboutUs;