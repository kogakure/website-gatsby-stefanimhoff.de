import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { HorizontalRule } from '../../../components/horizontal-rule';

const Footer = styled.footer`
  grid-column: 2 / -2;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / -7;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 7 / -7;
  }
`;

const Divider = styled(HorizontalRule)`
  margin-top: 0;
`;

export const Styled = {
  Footer,
  Divider,
};
