import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TermsAndConditionsFirstComponent from '../components/TermsAndConditionsFirstComponent';
import TermsAndConditionsHeroSection from '../components/TermsAndConditionsHeroSection';

function TermsAndConditions() {
    return (
        <>
            <Navbar />
            <TermsAndConditionsFirstComponent />
            <TermsAndConditionsHeroSection />
            <Footer />
        </>
    );
}

export default TermsAndConditions;