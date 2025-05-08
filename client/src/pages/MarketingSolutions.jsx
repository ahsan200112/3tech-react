import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MarketingSolutionsFirstComponent from '../components/MarketingSolutionsFirstComponent';
import MarketingSolutionsHeroSection from '../components/MarketingSolutionsHeroSection';
import OurClientsSay from '../components/OurClientsSay';
import MarketingSolutionsFaqs from '../components/MarketingSolutionsFaqs';

function MarketingSolutions() {
    return (
        <>
            <Navbar />
            <MarketingSolutionsFirstComponent />
            <MarketingSolutionsHeroSection />
            <OurClientsSay />
            <MarketingSolutionsFaqs />
            <Footer />
        </>
    );
}

export default MarketingSolutions;