import React from 'react';

import { ContentGrid, Layout, SEO } from '../layout';
import {
  AboutMe,
  CoverImage,
  Journal,
  Title,
  WhatIDo,
} from '../screens/homepage';

const IndexPage = () => (
  <Layout>
    <SEO homepage />
    <ContentGrid rowGap>
      <Title />
      <CoverImage />
      <AboutMe />
      <WhatIDo />
      <Journal />
    </ContentGrid>
  </Layout>
);

export default IndexPage;
