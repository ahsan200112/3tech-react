import React from 'react';
import EcommerceSolutionsFirstComponent from '../components/EcommerceSolutionsFirstComponent';
import EcommerceSolutionsHeroSection from '../components/EcommerceSolutionsHeroComponent';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import GTM from '../components/GoogleTagManager/GTM';

function ECommerceSolution() {
    return (
        <>
            <GTM />
            <EcommerceSolutionsFirstComponent />
            <EcommerceSolutionsHeroSection />
            <OurClientsSay />
            <FrequentlyAskedQuestions />
        </>
    );
}

export default ECommerceSolution;