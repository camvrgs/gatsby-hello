import React from 'react';
import Layout from '../components/common/Layout';
import SEO from '../components/common/SEO';
import Intro from '../components/intro';
import About from '../components/about';
import Projects from '../components/projects';
import Articles from '../components/articles';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout splashScreen={false}>
    <SEO title="Home"/>
    <Intro />
    <About />
    <Projects />
    <Articles />
    <Contact />
  </Layout>
);

export default IndexPage;
