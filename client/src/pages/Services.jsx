import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesFirstComponent from '../components/ServicesFirstComponent';
import OurServices from '../components/OurServices';
import OurWorkingProcess from '../components/OurWorkingProcess';
import GetContactNow from '../components/GetContactNow';
import OurClientsSay from '../components/OurClientsSay';

function Services() {
  return (
    <>
      <Navbar />
      <ServicesFirstComponent />
      <OurServices />
      <GetContactNow />
      <OurWorkingProcess />
      <OurClientsSay />
      <Footer />
    </>
  );
}

export default Services;