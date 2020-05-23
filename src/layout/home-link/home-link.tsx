import * as React from 'react';

import { Styled } from './home-link.styles';

export const HomeLink: React.FC = ({ ...props }) => (
  <Styled.ArrowLink to="/" activeStyle={{ visibility: 'hidden' }} {...props}>
    <Styled.Button type="button" aria-label="Back to Homepage">
      <Styled.Arrow />
    </Styled.Button>
  </Styled.ArrowLink>
);
