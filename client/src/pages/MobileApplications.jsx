import React from 'react';
import MobileApplicationsFirstComponent from '../components/MobileApplicaionsFirstComponent';
import MobileApplicationsHeroSection from '../components/MobileApplicationsHeroComponent';
import OurClientSays from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import GTM from '../components/GoogleTagManager/GTM';

function MobileApplications() {
    return (
        <>
            <GTM />
            <MobileApplicationsFirstComponent />
            <MobileApplicationsHeroSection />
            <OurClientSays />
            <FrequentlyAskedQuestions />
        </>
    );
}

export default MobileApplications;