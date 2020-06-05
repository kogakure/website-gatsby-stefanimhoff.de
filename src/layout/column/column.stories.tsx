import React from 'react';
import styled from 'styled-components';

import { Main } from '../main';

import { Column } from '.';

const Box = styled.div`
  align-items: center;
  background: rgba(25, 25, 25, 0.3);
  display: flex;
  justify-content: center;
`;

const rowProps = {
  marginBottom: true,
};

export default {
  component: Column,
  title: 'Layout/Column',
};

export const Default = () => (
  <Main>
    <Column {...rowProps}>
      <Box>Default</Box>
    </Column>
  </Main>
);

export const Fullsize = () => (
  <Main>
    <Column size="fullsize" {...rowProps} debug>
      <Box>fullsize</Box>
    </Column>
  </Main>
);

export const Regular = () => (
  <Main>
    <Column size="regular" {...rowProps} debug>
      <Box>regular</Box>
    </Column>
  </Main>
);

export const Narrow = () => (
  <Main>
    <Column size="narrow" {...rowProps} debug>
      <Box>narrow</Box>
    </Column>
  </Main>
);
