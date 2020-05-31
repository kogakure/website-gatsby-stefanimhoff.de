import React from 'react';

import { ContentGrid, Layout } from '../layout';
import { ColorGrid, Title } from '../screens/traditional-colors-of-japan';

const TraditionalColorsOfJapanPage = () => (
  <Layout size="regular">
    <ContentGrid rowGap size="regular">
      <Title />
      <ColorGrid />
    </ContentGrid>
  </Layout>
);

export default TraditionalColorsOfJapanPage;
