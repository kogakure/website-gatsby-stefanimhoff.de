import styled from 'styled-components';
import { Link } from 'gatsby';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
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

export const Styled = {
  List,
  Item,
  ItemLink,
};
