import React from 'react';

import RegularTemplate from '../templates/regular';
import { Grid } from '../layout';
import { Haiku, Huge404, Title } from '../screens/404';

const Error404Page = () => (
  <RegularTemplate>
    <Grid rowGap variant="regular">
      <Title />
      <Haiku />
      <Huge404 />
    </Grid>
  </RegularTemplate>
);

export default Error404Page;
