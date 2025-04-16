import React from 'react';
import PrivacyPolicyFirstComponent from '../components/PrivacyPolicyFirstComponent';
import PrivacyPolicyHeroSection from '../components/PrivacyPolicyHeroSection';
import GTM from '../components/GoogleTagManager/GTM';

function PrivacyPolicy() {
    return (
        <>
            <GTM />
            <PrivacyPolicyFirstComponent />
            <PrivacyPolicyHeroSection />
        </>
    );
}

export default PrivacyPolicy;