import React from 'react';

import { ContentGrid, Layout, SEO } from '../layout';
import {
  BambooIllustration,
  BookKogakure,
  HamburgBlog,
  IgaNinjaFont,
  Introduction,
  JapaneseColor,
  KoiIllustration,
  MartialArtsWebsite,
  OsteopathieHamburg,
  Sketchnotes,
  StefanImhoffV2,
  ThaiRestaurant,
  Title,
  Writing,
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
      <Sketchnotes />
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
