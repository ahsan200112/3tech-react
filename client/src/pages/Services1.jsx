import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesFirstComponent from '../components/ServicesFirstComponent';
import OurServices1 from '../components/OurServices1';
import OurWorkingProcess from '../components/OurWorkingProcess';
import GetContactNow from '../components/GetContactNow';
import OurClientsSay from '../components/OurClientsSay';

function Services1() {
  return (
    <>
      <Navbar />
      <ServicesFirstComponent />
      <OurServices1 />
      <GetContactNow />
      <OurWorkingProcess />
      <OurClientsSay />
      <Footer />
    </>
  );
}

export default Services1;