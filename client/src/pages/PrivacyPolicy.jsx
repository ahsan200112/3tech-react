import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrivacyPolicyFirstComponent from '../components/PrivacyPolicyFirstComponent';
import PrivacyPolicyHeroSection from '../components/PrivacyPolicyHeroSection';

function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <PrivacyPolicyFirstComponent />
            <PrivacyPolicyHeroSection />
            <Footer />
        </>
    );
}

export default PrivacyPolicy;