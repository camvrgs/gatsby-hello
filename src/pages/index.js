import React from 'react';
import Layout from '../components/common/Layout';
import SEO from '../components/common/SEO';
import Intro from '../components/intro';
import About from '../components/about';
import Articles from '../components/Articles';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout splashScreen={false}>
    <SEO title="Home"/>
    <Intro />
    <About />
    <Articles />
    <Contact />
  </Layout>
);

export default IndexPage;
