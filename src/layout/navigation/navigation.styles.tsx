import styled from 'styled-components';
import { Link } from 'gatsby';

import { ArrowLeft } from '../../components/icons';

const Navigation = styled.nav`
  align-items: center;
  display: flex;
`;

const BackLink = styled.div`
  align-items: center;
  display: flex;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
`;

const Item = styled.li`
  margin-right: 20px;
`;

const ItemLink = styled(Link)`
  color: var(--colorText);
  text-decoration: none;
  text-decoration-color: var(--colorLink);

  &:hover,
  &:focus {
    text-decoration: underline;
    text-decoration-color: var(--colorLinkActive) !important;
    text-decoration-thickness: 0.1em;
    text-underline-offset: 0.1em;

    @supports (not (text-decoration-color: red)) {
      color: var(--colorLink);
    }
  }
`;

const Arrow = styled(ArrowLeft)`
  fill: var(--colorText);
  font-size: 1.2rem;
`;

const ArrowLink = styled(Link)`
  align-items: center;
  display: flex;
`;

export const Styled = {
  Arrow,
  ArrowLink,
  BackLink,
  List,
  Item,
  ItemLink,
  Navigation,
};
