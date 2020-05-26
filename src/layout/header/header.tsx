import * as React from 'react';

import { NavigationItem } from '../../typings/graphql';

import { Styled } from './header.styles';

export type HeaderProps = {
  navigation: NavigationItem[];
};

export const Header: React.FC<HeaderProps> = ({ navigation }) => (
  <Styled.Header as="header" role="banner">
    <Styled.GridHomeLink />
    <Styled.GridNavigation navigation={navigation} />
    <Styled.GridThemeToggle />
  </Styled.Header>
);
