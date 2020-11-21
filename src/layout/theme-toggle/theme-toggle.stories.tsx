import React from 'react';
import styled from 'styled-components';

import { ThemeToggle } from '.';

const Box = styled.div`
  background-color: #fff;
  border: 2px solid #000;
`;

export default {
  component: ThemeToggle,
  title: 'Theme Toggle',
};

export const Default = () => (
  <Box>
    <ThemeToggle />
  </Box>
);
