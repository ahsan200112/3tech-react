import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileApplicationsFirstComponent from '../components/MobileApplicaionsFirstComponent';
import MobileApplicationsHeroSection from '../components/MobileApplicationsHeroComponent';
import OurClientSays from '../components/OurClientsSay';
import MobileApplicationsFaqs from '../components/MobileApplicationsFaqs';

function MobileApplications() {
    return (
        <>
            <Navbar />
            <MobileApplicationsFirstComponent />
            <MobileApplicationsHeroSection />
            <OurClientSays />
            <MobileApplicationsFaqs />
            <Footer />
        </>
    );
}

export default MobileApplications;