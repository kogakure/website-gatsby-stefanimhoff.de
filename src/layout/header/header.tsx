import * as React from 'react';

import { ThemeToggle, Navigation } from '..';

import { Styled } from './header.styles';

export const Header: React.FC = () => (
  <Styled.Header className="page-header">
    <Navigation />
    <ThemeToggle />
  </Styled.Header>
);
