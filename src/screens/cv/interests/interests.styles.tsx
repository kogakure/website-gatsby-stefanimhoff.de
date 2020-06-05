import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { UnorderedList } from '../../../components/unordered-list';

const Interests = styled.section`
  grid-column: 1 / -1;
`;

const List = styled(UnorderedList)`
  column-count: 1;
  column-gap: 5.55vw;

  @media (${mediaQuery.tablet}) {
    column-count: 2;
  }
`;

export const Styled = {
  Interests,
  List,
};
