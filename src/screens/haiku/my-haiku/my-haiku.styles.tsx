import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { TextLink } from '../../../components/text-link';

const MyHaiku = styled.div`
  grid-column: 2 / -2;
  grid-row: 6;

  @media (${mediaQuery.tablet}) {
    grid-column: 2 / 9;
    grid-row: 5;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 5 / 11;
  }
`;

const List = styled.ol`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
  justify-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: var(--colorAccent);
  border-radius: 50%;
`;

const LinkedListItem = styled(TextLink)`
  align-items: center;
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  height: 2rem;
  justify-content: center;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  text-decoration: none;
  width: 2rem;
`;

export const Styled = {
  LinkedListItem,
  List,
  ListItem,
  MyHaiku,
};
