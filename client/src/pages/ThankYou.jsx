import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThankYouMessage from '../components/ThankYouMessage';

function ThankYou() {
    return (
        <>
            <Navbar />
            <ThankYouMessage />
            <Footer />
        </>
    );
}

export default ThankYou;