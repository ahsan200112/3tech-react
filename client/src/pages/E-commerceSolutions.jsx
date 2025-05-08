import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EcommerceSolutionsFirstComponent from '../components/EcommerceSolutionsFirstComponent';
import EcommerceSolutionsHeroSection from '../components/EcommerceSolutionsHeroComponent';
import OurClientsSay from '../components/OurClientsSay';
import EcommerceSolutionsFaqs from '../components/EcommerceSolutionsFaqs';

function ECommerceSolution() {
    return (
        <>
            <Navbar />
            <EcommerceSolutionsFirstComponent />
            <EcommerceSolutionsHeroSection />
            <OurClientsSay />
            <EcommerceSolutionsFaqs />
            <Footer />
        </>
    );
}

export default ECommerceSolution;