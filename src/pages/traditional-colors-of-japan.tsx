import React from 'react';

import { ContentGrid, Layout, SEO } from '../layout';
import {
  Books,
  ColorGrid,
  Introduction,
  Title,
} from '../screens/traditional-colors-of-japan';

const TraditionalColorsOfJapanPage = () => (
  <Layout homeTo="/projects/" size="regular">
    <SEO title="The Traditional lColors of Japan" />
    <ContentGrid rowGap size="regular">
      <Title />
      <Introduction />
      <Books />
      <ColorGrid />
    </ContentGrid>
  </Layout>
);

export default TraditionalColorsOfJapanPage;
