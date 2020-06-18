import React from 'react';

import { ContentGrid, Layout, SEO } from '../layout';
import {
  BookCover,
  IgaNinjaFont,
  Introduction,
  Writing,
  Title,
  JapaneseColor,
} from '../screens/projects';

const ProjectsPage = () => (
  <Layout>
    <ContentGrid rowGap>
      <SEO title="Projects" />
      <Title />
      <Introduction />
      <JapaneseColor />
      <Writing />
      <BookCover />
      <IgaNinjaFont />
    </ContentGrid>
  </Layout>
);

export default ProjectsPage;
