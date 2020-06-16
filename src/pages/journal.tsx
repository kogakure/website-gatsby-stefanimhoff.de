import React from 'react';

import { Layout, ContentGrid, SEO } from '../layout';
import { AllPosts, Introduction, Monthly, Title } from '../screens/journal';

const JournalPage = () => (
  <Layout>
    <SEO title="Journal" />
    <ContentGrid rowGap size="fullsize">
      <Title />
      <Introduction />
      <Monthly />
      <AllPosts />
    </ContentGrid>
  </Layout>
);

export default JournalPage;
