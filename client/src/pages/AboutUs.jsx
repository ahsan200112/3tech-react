import React from 'react';
import AboutFirstComponent from '../components/AboutFirstComponent';
import ExpertiseYouCanTrust from '../components/ExpertiseYouCanTrust';
import YourSuccessOurPriority from '../components/YourSuccessOurPriority';
import OurTrustedPartners from '../components/OurTrustedPartners';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

function AboutUs() {
  return (
    <>
      <AboutFirstComponent />
      <ExpertiseYouCanTrust />
      <YourSuccessOurPriority />
      <OurTrustedPartners />
      <OurClientsSay />
      <FrequentlyAskedQuestions />
    </>
  );
}

export default AboutUs;