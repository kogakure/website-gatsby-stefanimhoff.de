import * as React from 'react';

import { Styled } from './header.styles';

export const Header: React.FC = () => (
  <Styled.Header role="banner">
    <Styled.GridHomeLink />
    <Styled.GridNavigation />
    <Styled.GridThemeToggle />
  </Styled.Header>
);
