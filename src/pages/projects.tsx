import React from 'react';

import { ContentGrid, Layout, SEO } from '../layout';
import {
  BookKogakure,
  IgaNinjaFont,
  Introduction,
  JapaneseColor,
  KoiIllustration,
  Title,
  BambooIllustration,
  Writing,
  HamburgBlog,
  MartialArtsWebsite,
  OsteopathieHamburg,
  StefanImhoffV2,
  ThaiRestaurant,
  XingIllustrations,
} from '../screens/projects';

const ProjectsPage = () => (
  <Layout>
    <ContentGrid rowGap>
      <SEO title="Projects" />
      <Title />
      <Introduction />
      <JapaneseColor />
      <Writing />
      <XingIllustrations />
      <BambooIllustration />
      <MartialArtsWebsite />
      <BookKogakure />
      <StefanImhoffV2 />
      <HamburgBlog />
      <KoiIllustration />
      <OsteopathieHamburg />
      <ThaiRestaurant />
      <IgaNinjaFont />
    </ContentGrid>
  </Layout>
);

export default ProjectsPage;
