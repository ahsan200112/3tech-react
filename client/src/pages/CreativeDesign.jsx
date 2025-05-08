import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CreativeDesignFirstComponent from "../components/CreativeDesignFirstComponent";
import CreativeDesignHeroSection from '../components/CreativeDesignHeroSection';
import OurClientsSay from '../components/OurClientsSay';
import CreativeDesignFaqs from '../components/CreativeDesignFaqs';

function CreativeDesign() {
    return (
        <>
            <Navbar />
            <CreativeDesignFirstComponent />
            <CreativeDesignHeroSection />
            <OurClientsSay />
            <CreativeDesignFaqs />
            <Footer />
        </>
    );
}

export default CreativeDesign;