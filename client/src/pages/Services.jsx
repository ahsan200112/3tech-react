import React from 'react';
import ServicesFirstComponent from '../components/ServicesFirstComponent';
import OurServices from '../components/OurServices';
import OurWorkingProcess from '../components/OurWorkingProcess';
import GetContactNow from '../components/GetContactNow';
import OurClientsSay from '../components/OurClientsSay';
import GTM from '../components/GoogleTagManager/GTM';

function Services() {
  return (
    <>
      <GTM />
      <ServicesFirstComponent />
      <OurServices />
      <GetContactNow />
      <OurWorkingProcess />
      <OurClientsSay />
    </>
  );
}

export default Services;