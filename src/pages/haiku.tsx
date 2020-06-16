import React from 'react';

import { Layout, ContentGrid, SEO } from '../layout';
import {
  Basho,
  Books,
  HaikuImage,
  Introduction,
  MyHaiku,
  Title,
} from '../screens/haiku';

const HaikuPage = () => (
  <Layout variant="green">
    <SEO title="Haiku" />
    <ContentGrid rowGap size="fullsize">
      <Title />
      <Introduction />
      <HaikuImage />
      <Basho />
      <Books />
      <MyHaiku />
    </ContentGrid>
  </Layout>
);

export default HaikuPage;
