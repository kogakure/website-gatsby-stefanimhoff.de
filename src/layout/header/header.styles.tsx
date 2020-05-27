import styled from 'styled-components';

import { ThemeToggle } from '../theme-toggle';
import { HomeLink } from '../home-link';
import { Navigation } from '../navigation';

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: clamp(50px, 5.55vw, 150px);
  margin-bottom: clamp(25px, 5.55vw, 150px);
`;

const GridHomeLink = styled(HomeLink)`
  align-self: center;
  grid-column: 1;
  justify-self: center;
`;

const GridNavigation = styled(Navigation)`
  align-self: center;
  grid-column: 3 / -3;
`;

const GridThemeToggle = styled(ThemeToggle)`
  align-self: center;
  grid-column: -2;
  justify-self: center;
`;

export const Styled = {
  GridHomeLink,
  GridNavigation,
  GridThemeToggle,
  Header,
};
