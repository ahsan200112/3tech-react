import React from 'react';
import CreativeDesignFirstComponent from "../components/CreativeDesignFirstComponent";
import CreativeDesignHeroSection from '../components/CreativeDesignHeroSection';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import GTM from '../components/GoogleTagManager/GTM';

function CreativeDesign() {
    return (
        <>
            <GTM />
            <CreativeDesignFirstComponent />
            <CreativeDesignHeroSection />
            <OurClientsSay />
            <FrequentlyAskedQuestions />
        </>
    );
}

export default CreativeDesign;