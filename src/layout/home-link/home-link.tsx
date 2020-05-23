import * as React from 'react';

import { Clickable } from '../../components/clickable';

import { Styled } from './home-link.styles';

export const HomeLink: React.FC = ({ ...props }) => (
  <Styled.ArrowLink to="/" activeStyle={{ visibility: 'hidden' }} {...props}>
    <Clickable text="Back to Homepage">
      <Styled.Arrow />
    </Clickable>
  </Styled.ArrowLink>
);
