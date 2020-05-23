import * as React from 'react';

import { Styled } from './up-link.styles';

const scrollToTop = (e: React.MouseEvent) => {
  e.preventDefault();
  const top = document.getElementById('top');

  if (top !== null) {
    top.scrollIntoView({ behavior: 'smooth' });
  }
};

export const UpLink: React.FC = ({ ...props }) => (
  <Styled.ArrowLink href="#top" onClick={scrollToTop} {...props}>
    <Styled.Button type="button" aria-label="Back to top">
      <Styled.Arrow />
    </Styled.Button>
  </Styled.ArrowLink>
);
