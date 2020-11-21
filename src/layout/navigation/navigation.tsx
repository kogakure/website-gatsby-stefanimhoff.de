import * as React from 'react';

import { NavigationItem } from '../../typings/graphql';

import { Styled } from './navigation.styles';

export type NavigationProps = {
  navigation: NavigationItem[];
};

export const Navigation = ({ navigation, ...props }: NavigationProps) => (
  <nav className="nav" role="navigation" {...props}>
    <Styled.List>
      {navigation.map((item) => (
        <Styled.Item key={item.text}>
          <Styled.ItemLink
            to={item.url}
            activeStyle={{
              textDecoration: 'underline',
              textDecorationThickness: '0.1em',
              textUnderlineOffset: '0.1em',
              textDecorationColor: 'var(--colorForegroundSoft)',
            }}
          >
            {item.text}
          </Styled.ItemLink>
        </Styled.Item>
      ))}
    </Styled.List>
  </nav>
);
