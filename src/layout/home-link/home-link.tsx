import * as React from 'react';

import { Styled } from './home-link.styles';

export type HomeLinkProps = {
  to?: string;
};

export const HomeLink: React.FC<HomeLinkProps> = ({ to = '/', ...props }) => (
  <Styled.ArrowLink to={to} activeStyle={{ visibility: 'hidden' }} {...props}>
    <Styled.Button
      aria-label={to === '/' ? 'Back to Homepage' : 'Back'}
      type="button"
    >
      <Styled.Arrow aria-hidden="true" />
    </Styled.Button>
  </Styled.ArrowLink>
);
