import * as React from 'react';

import { Grid } from '..';

import { Styled } from './header.styles';

export const Header: React.FC = () => (
  <Grid as="header" role="banner">
    <Styled.GridHomeLink />
    <Styled.GridNavigation />
    <Styled.GridThemeToggle />
  </Grid>
);
