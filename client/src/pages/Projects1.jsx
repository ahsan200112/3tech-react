import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsFirstComponent from '../components/ProjectsFirstComponent';
import GetContactNow from '../components/GetContactNow';
import OurProjectsDetail1 from '../components/OurProjectsDetail1';

function Projects1() {
  return (
    <>
      <Navbar />
      <ProjectsFirstComponent />
      <OurProjectsDetail1 />
      <GetContactNow />
      <Footer />
    </>
  );
}

export default Projects1;