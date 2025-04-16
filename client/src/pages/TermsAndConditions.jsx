import React from 'react';
import TermsAndConditionsFirstComponent from '../components/TermsAndConditionsFirstComponent';
import TermsAndConditionsHeroSection from '../components/TermsAndConditionsHeroSection';
import GTM from '../components/GoogleTagManager/GTM';

function TermsAndConditions() {
    return (
        <>
            <GTM />
            <TermsAndConditionsFirstComponent />
            <TermsAndConditionsHeroSection />
        </>
    );
}

export default TermsAndConditions;