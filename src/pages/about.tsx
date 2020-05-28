import React from 'react';

import FullsizeTemplate from '../templates/fullsize';
import { Grid } from '../layout';
import {
  AboutMe,
  AboutWebsite,
  Connect,
  Contact,
  Photo,
  Title,
} from '../screens/about';

const AboutPage = () => (
  <FullsizeTemplate>
    <Grid rowGap variant="fullsize">
      <Title />
      <Photo />
      <AboutMe />
      <AboutWebsite />
      <Contact />
      <Connect />
    </Grid>
  </FullsizeTemplate>
);

export default AboutPage;
