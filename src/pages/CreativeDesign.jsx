import React from 'react';
import CreativeDesignFirstComponent from "../components/CreativeDesignFirstComponent";
import CreativeDesignHeroSection from '../components/CreativeDesignHeroSection';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

function CreativeDesign() {
    return (
        <>
            <CreativeDesignFirstComponent />
            <CreativeDesignHeroSection />
            <OurClientsSay />
            <FrequentlyAskedQuestions />
        </>
    );
}

export default CreativeDesign;