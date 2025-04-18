import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFirstComponent from '../components/ContactFirstComponent';
import GetInTouch from '../components/GetInTouch';
import GetContactNow2 from '../components/GetContactNow2';

function ContactUs() {
  return (
    <>
      <Navbar />
      <ContactFirstComponent />
      <GetContactNow2 />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default ContactUs;