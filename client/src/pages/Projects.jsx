import React from 'react';
import ProjectsFirstComponent from '../components/ProjectsFirstComponent';
import GetContactNow from '../components/GetContactNow';
import OurProjectsDetail from '../components/OurProjectsDetail';
import GTM from '../components/GoogleTagManager/GTM';

function Projects() {
  return (
    <>
      <GTM />
      <ProjectsFirstComponent />
      <OurProjectsDetail />
      <GetContactNow />
    </>
  );
}

export default Projects;