import React from 'react';
import BlogsFirstComponent from '../components/BlogsFirstComponent';
import BlogsSection from '../components/BlogsSection';
import GTM from '../components/GoogleTagManager/GTM';

function Blogs() {
  return (
    <>
      <GTM />
      <BlogsFirstComponent />
      <BlogsSection />
    </>
  );
}

export default Blogs;