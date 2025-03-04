import React from 'react';

const ServicesSection = () => {
  return (
    <section className="services py-5">
      <div className="container text-center">
        <h2>Our Services</h2>
        <p>We offer a variety of services to cater to your business needs.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3">
              <h4>Web Development</h4>
              <p>Building scalable and responsive websites.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h4>Mobile Apps</h4>
              <p>Creating seamless mobile applications.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h4>SEO Optimization</h4>
              <p>Boosting your online presence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;