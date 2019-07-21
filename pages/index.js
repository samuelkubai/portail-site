import React from "react";
import Demo from '../components/Demo';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import ValueProposition from '../components/ValueProposition';

import '../styles/index.scss';

const Index = () => {
  return (
    <div className="pg-site">
      <Hero />
      <ValueProposition />
      <Demo />
      <Newsletter />
      <Footer />
    </div>
  )
};

export default Index;
