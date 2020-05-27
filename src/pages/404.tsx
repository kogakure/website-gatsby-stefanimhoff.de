import React from 'react';

import RegularTemplate from '../templates/regular';
import { Grid } from '../layout';
import { Styled } from '../screens/404';

const Error404Page = () => (
  <RegularTemplate>
    <Grid rowGap variant="regular">
      <Styled.Title404>This page can’t be found.</Styled.Title404>
      <Styled.Haiku variant="left">
        You searched for something.
        <br />
        It might have once been here.
        <br />
        But now it’s gone.
      </Styled.Haiku>
      <Styled.Huge404 role="img" aria-hidden="true">
        404
      </Styled.Huge404>
    </Grid>
  </RegularTemplate>
);

export default Error404Page;
