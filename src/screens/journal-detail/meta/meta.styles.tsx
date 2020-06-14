import styled from 'styled-components';

import { mediaQuery, space } from '../../../layout/tokens';

const Meta = styled.header`
  grid-column: 2 / -2;
  grid-row: 2;

  @media (${mediaQuery.tablet}) {
    grid-column: -6 / -3;
  }
`;

const Author = styled.div`
  line-height: 1;
  margin-bottom: ${space[6]};
`;

const Date = styled.div`
  line-height: 1.2;
`;

const ReadingTime = styled.div`
  font-style: italic;
  line-height: 1;
`;

export const Styled = {
  Meta,
  Author,
  Date,
  ReadingTime,
};
