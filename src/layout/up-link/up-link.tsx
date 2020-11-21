import * as React from 'react';

import { Styled } from './up-link.styles';

const scrollToTop = (e: React.MouseEvent) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

export const UpLink = ({ ...props }) => (
  <Styled.ArrowLink href="#top" onClick={scrollToTop} {...props}>
    <Styled.Button type="button" aria-label="Back to top">
      <Styled.Arrow aria-hidden="true" />
    </Styled.Button>
  </Styled.ArrowLink>
);
