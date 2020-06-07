import React from 'react';

import { Layout, ContentGrid } from '../layout';
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
