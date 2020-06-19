import React from 'react';

import { ContentGrid, Layout, SEO } from '../layout';
import {
  BookCover,
  IgaNinjaFont,
  Introduction,
  JapaneseColor,
  KoiIllustration,
  Title,
  Writing,
} from '../screens/projects';

const ProjectsPage = () => (
  <Layout>
    <ContentGrid rowGap>
      <SEO title="Projects" />
      <Title />
      <Introduction />
      <JapaneseColor />
      <Writing />
      <KoiIllustration />
      <BookCover />
      <IgaNinjaFont />
    </ContentGrid>
  </Layout>
);

export default ProjectsPage;
