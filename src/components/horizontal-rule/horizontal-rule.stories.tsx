import React from 'react';
import styled from 'styled-components';

import { HorizontalRule } from '.';

const Grid = styled.div`
  width: 300px;
`;

export default {
  component: HorizontalRule,
  title: 'Misc/Horizontal Rule',
};

export const Default = () => (
  <Grid>
    <HorizontalRule />
  </Grid>
);
