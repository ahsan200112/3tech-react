import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileApplicationsFirstComponent from '../components/MobileApplicaionsFirstComponent';
import MobileApplicationsHeroSection from '../components/MobileApplicationsHeroComponent';
import OurClientSays from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

function MobileApplications() {
    return (
        <>
            <Navbar />
            <MobileApplicationsFirstComponent />
            <MobileApplicationsHeroSection />
            <OurClientSays />
            <FrequentlyAskedQuestions />
            <Footer />
        </>
    );
}

export default MobileApplications;