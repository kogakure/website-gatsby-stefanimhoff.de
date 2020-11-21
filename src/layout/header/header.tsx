import * as React from 'react';

import { NavigationItem } from '../../typings/graphql';

import { Styled } from './header.styles';

export type HeaderProps = {
  homeTo?: string;
  navigation: NavigationItem[];
};

export const Header = ({ homeTo, navigation }: HeaderProps) => (
  <Styled.Header role="banner">
    <Styled.GridHomeLink to={homeTo} />
    <Styled.GridNavigation navigation={navigation} />
    <Styled.GridThemeToggle />
  </Styled.Header>
);
