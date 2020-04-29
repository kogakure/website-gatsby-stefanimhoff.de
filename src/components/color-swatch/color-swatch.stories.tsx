import React from 'react';
import styled from 'styled-components';

import { ColorSwatch } from '.';

const Grid = styled.div`
  width: 200px;
`;

export default {
  component: ColorSwatch,
  title: 'Misc/Color Swatch',
};

export const Default = () => (
  <Grid>
    <ColorSwatch
      color="#005CAF"
      name="Lapis Lazuli"
      description="The soft, slightly purplish blue associated with the semi-precious stone."
    />
  </Grid>
);

export const WithDescription = () => (
  <Grid>
    <ColorSwatch
      color="#005CAF"
      description="The soft, slightly purplish blue associated with the semi-precious stone."
    />
  </Grid>
);

export const RGBValue = () => (
  <Grid>
    <ColorSwatch color="#005CAF" />
  </Grid>
);

export const HSLValue = () => (
  <Grid>
    <ColorSwatch color="hsl(208, 100%, 34%)" />
  </Grid>
);
