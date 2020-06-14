import React from 'react';

import { Layout, ContentGrid } from '../layout';
import { AllPosts, Introduction, Monthly, Title } from '../screens/journal';

const JournalPage = () => (
  <Layout>
    <ContentGrid rowGap size="fullsize">
      <Title />
      <Introduction />
      <Monthly />
      <AllPosts />
    </ContentGrid>
  </Layout>
);

export default JournalPage;
