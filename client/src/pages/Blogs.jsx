import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogsFirstComponent from '../components/BlogsFirstComponent';
import BlogsSection from '../components/BlogsSection';

function Blogs() {
  return (
    <>
      <Navbar />
      <BlogsFirstComponent />
      <BlogsSection />
      <Footer />
    </>
  );
}

export default Blogs;