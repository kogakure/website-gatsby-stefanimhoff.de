import React from 'react';

import { ContentGrid, Layout, SEO } from '../layout';
import { Haiku, Huge404, Title } from '../screens/404';

const Error404Page = () => (
  <Layout size="regular">
    <SEO title="Error 404" />
    <ContentGrid rowGap size="regular">
      <Title />
      <Haiku />
      <Huge404 />
    </ContentGrid>
  </Layout>
);

export default Error404Page;
