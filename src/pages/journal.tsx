import React from 'react';

import { Layout, ContentGrid, SEO } from '../layout';
import { AllPosts, Introduction, Links, Title } from '../screens/journal';

const JournalPage = () => (
  <Layout>
    <SEO title="Journal" />
    <ContentGrid rowGap size="fullsize">
      <Title />
      <Introduction />
      <Links />
      <AllPosts />
    </ContentGrid>
  </Layout>
);

export default JournalPage;
