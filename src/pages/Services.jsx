import React from 'react';
import ServicesFirstComponent from '../components/ServicesFirstComponent';
import OurServices from '../components/OurServices';
import OurWorkingProcess from '../components/OurWorkingProcess';
import GetContactNow from '../components/GetContactNow';
import OurClientsSay from '../components/OurClientsSay';

function Services() {
  return (
    <>
      <ServicesFirstComponent />
      <OurServices />
      <GetContactNow/>
      <OurWorkingProcess/>
      <OurClientsSay/>
    </>
  );
}

export default Services;