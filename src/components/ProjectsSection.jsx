import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="projects py-5 bg-light">
      <div className="container text-center">
        <h2>Our Projects</h2>
        <p>Some of our recent work.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3">
              <h4>Project One</h4>
              <p>Details about project one.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h4>Project Two</h4>
              <p>Details about project two.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h4>Project Three</h4>
              <p>Details about project three.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;