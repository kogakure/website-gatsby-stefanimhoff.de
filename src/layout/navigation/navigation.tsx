import * as React from 'react';

import { NavigationItem } from '../../typings/graphql';

import { Styled } from './navigation.styles';

export type NavigationProps = {
  navigation: NavigationItem[];
};

export const Navigation: React.FC<NavigationProps> = ({
  navigation,
  ...props
}) => (
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
              textDecorationColor: 'var(--colorLink)',
            }}
          >
            {item.text}
          </Styled.ItemLink>
        </Styled.Item>
      ))}
    </Styled.List>
  </nav>
);
