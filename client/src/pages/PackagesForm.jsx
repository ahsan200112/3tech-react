import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PackagesFormFirstComponent from '../components/PackagesFormFirstComponent';
import ContactFormWithPackage from '../components/ContactFormWithPackage';

function PackagesForm() {
    return (
        <>
            <Navbar />
            <PackagesFormFirstComponent />
            <ContactFormWithPackage />
            <Footer />
        </>
    );
}

export default PackagesForm;