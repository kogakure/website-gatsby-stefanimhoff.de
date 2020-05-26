import * as React from 'react';

import { Styled } from './home-link.styles';

export const HomeLink: React.FC = ({ ...props }) => (
  <Styled.ArrowLink to="/" activeStyle={{ visibility: 'hidden' }} {...props}>
    <Styled.Button aria-label="Back to Homepage" type="button">
      <Styled.Arrow aria-hidden="true" />
    </Styled.Button>
  </Styled.ArrowLink>
);
