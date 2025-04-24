import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../dashboard/layout/DashboardLayout';
import DashboardHome from '../dashboard/pages/DashboardHome';
import Blogs from '../dashboard/pages/Blogs';
import Users from '../dashboard/pages/Users';
import Services from '../dashboard/pages/Services';
import Packages from '../dashboard/pages/Packages';
import Projects from '../dashboard/pages/Projects';
import ContactForm from '../dashboard/pages/ContactForm';
import ScrollToTop from "../components/ScrollToTop";
import FAQ from '../dashboard/pages/FAQ';
import Testimonial from '../dashboard/pages/Testimonial';

const DashboardRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="users" element={<Users />} />
          <Route path="services" element={<Services />} />
          <Route path="packages" element={<Packages />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contactforms" element={<ContactForm />} />
          <Route path="faqs" element={<FAQ />} />
          <Route path="testimonials" element={<Testimonial />} />
          {/* Add more pages as needed */}
        </Route>
      </Routes>
    </>
  );
};

export default DashboardRoutes;
