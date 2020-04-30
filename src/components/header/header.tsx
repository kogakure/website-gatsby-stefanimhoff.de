import * as React from 'react';
import { Link } from 'gatsby';

import { Styled } from './header.styles';

export type HeaderProps = {
  siteTitle?: string;
};

export const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <Styled.HeaderWrapper>
    <Styled.HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'grey',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Styled.HeaderContainer>
  </Styled.HeaderWrapper>
);
