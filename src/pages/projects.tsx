import React from 'react';

import { ContentGrid, Layout, SEO } from '../layout';
import { Title, Introduction, IgaNinjaFont } from '../screens/projects';

const ProjectsPage = () => (
  <Layout>
    <ContentGrid rowGap>
      <SEO title="Projects" />
      <Title />
      <Introduction />
      <IgaNinjaFont />
    </ContentGrid>
  </Layout>
);

export default ProjectsPage;
