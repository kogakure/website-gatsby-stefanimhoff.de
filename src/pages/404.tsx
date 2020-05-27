import React from 'react';

import RegularTemplate from '../templates/regular';
import { Grid } from '../layout';
import { Haiku, Title404, Huge404 } from '../screens/404';

const Error404Page = () => (
  <RegularTemplate>
    <Grid rowGap variant="regular">
      <Title404>This page can’t be found.</Title404>
      <Haiku variant="left">
        You searched for something.
        <br />
        It might have once been here.
        <br />
        But now it’s gone.
      </Haiku>
      <Huge404 role="img" aria-hidden="true">
        404
      </Huge404>
    </Grid>
  </RegularTemplate>
);

export default Error404Page;
