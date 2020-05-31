import React from 'react';

import { ContentGrid, Layout } from '../layout';
import { Haiku, Huge404, Title } from '../screens/404';

const Error404Page = () => (
  <Layout size="regular">
    <ContentGrid rowGap size="regular">
      <Title />
      <Haiku />
      <Huge404 />
    </ContentGrid>
  </Layout>
);

export default Error404Page;
