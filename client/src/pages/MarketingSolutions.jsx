import React from 'react';
import MarketingSolutionsFirstComponent from '../components/MarketingSolutionsFirstComponent';
import MarketingSolutionsHeroSection from '../components/MarketingSolutionsHeroSection';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import GTM from '../components/GoogleTagManager/GTM';

function MarketingSolutions() {
    return (
        <>
            <GTM />
            <MarketingSolutionsFirstComponent />
            <MarketingSolutionsHeroSection />
            <OurClientsSay />
            <FrequentlyAskedQuestions />
        </>
    );
}

export default MarketingSolutions;