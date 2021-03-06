import * as React from 'react';

import { Styled } from './footer.styles';

export const Footer = () => (
  <Styled.Footer role="contentinfo">
    <Styled.GridUpLink />
    <Styled.GridLegalInformation />
  </Styled.Footer>
);
