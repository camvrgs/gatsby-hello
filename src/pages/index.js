import React from 'react';
import Layout from '../components/common/Layout';
import SEO from '../components/common/SEO';
import Intro from '../components/intro';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout splashScreen={false}>
    <SEO title="Home"/>
    <Intro />
    <Contact />
  </Layout>
);

export default IndexPage;
