import React from 'react';

import { ContentGrid, Layout } from '../layout';
import {
  Book,
  ColorGrid,
  Introduction,
  Title,
} from '../screens/traditional-colors-of-japan';

const TraditionalColorsOfJapanPage = () => (
  <Layout homeTo="/projects/" size="regular">
    <ContentGrid rowGap size="regular">
      <Title />
      <Introduction />
      <Book />
      <ColorGrid />
    </ContentGrid>
  </Layout>
);

export default TraditionalColorsOfJapanPage;
