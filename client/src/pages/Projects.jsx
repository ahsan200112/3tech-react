import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsFirstComponent from '../components/ProjectsFirstComponent';
import GetContactNow from '../components/GetContactNow';
import OurProjectsDetail from '../components/OurProjectsDetail';

function Projects() {
  return (
    <>
      <Navbar />
      <ProjectsFirstComponent />
      <OurProjectsDetail />
      <GetContactNow />
      <Footer />
    </>
  );
}

export default Projects;