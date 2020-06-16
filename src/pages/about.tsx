import React from 'react';

import { Layout, ContentGrid, SEO } from '../layout';
import {
  AboutMe,
  AboutWebsite,
  Connect,
  Contact,
  Photo,
  Title,
} from '../screens/about';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <ContentGrid rowGap size="fullsize">
      <Title />
      <Photo />
      <AboutMe />
      <AboutWebsite />
      <Contact />
      <Connect />
    </ContentGrid>
  </Layout>
);

export default AboutPage;
