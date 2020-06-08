import styled from 'styled-components';

import { HomeLink } from '../home-link';
import { ThemeToggle } from '../theme-toggle';

const Header = styled.header`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: clamp(50px, 5.55vw, 150px);
  height: clamp(50px, 5.55vw, 150px);
  z-index: 1;
`;

const HeaderHomeLink = styled(HomeLink)`
  align-self: center;
  grid-column: 1;
  justify-self: center;
`;

const HeaderThemeToggle = styled(ThemeToggle)`
  align-self: center;
  grid-column: -2;
  justify-self: center;
`;

export const Styled = {
  Header,
  HeaderHomeLink,
  HeaderThemeToggle,
};
