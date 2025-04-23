import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PackagesFirstComponent from '../components/PackagesFirstComponent';
import OurPackages1 from '../components/OurPackages1';
import CustomPackageOpinion from '../components/CustomPackageOpinion';
import OurClientsSay from '../components/OurClientsSay';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

function Packages() {
    return (
        <>
            <Navbar />
            <PackagesFirstComponent />
            <OurPackages1 />
            <CustomPackageOpinion />
            <OurClientsSay />
            <FrequentlyAskedQuestions />
            <Footer />
        </>
    );
}

export default Packages;