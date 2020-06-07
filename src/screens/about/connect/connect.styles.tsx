import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { UnorderedList } from '../../../components/unordered-list';

const Connect = styled.section`
  grid-column: 2 / -2;
  grid-row: 6;

  @media (${mediaQuery.tablet}) {
    grid-column: 8 / -3;
    grid-row: 5;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 9 / -5;
  }
`;

const SocialMedia = styled(UnorderedList)`
  column-count: 1;
  margin: 0;

  @media (min-width: 300px) {
    column-count: 2;
    grid-column: 9 / -4;
  }

  @media (min-width: 400px) {
    column-count: 3;
  }
`;

export const Styled = {
  Connect,
  SocialMedia,
};
