import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Image as BookCover } from '../../../components/image';

const Image = styled(BookCover)`
  border-left-width: 0;
  border-right-width: 0;
  grid-row: 1;

  @media (${mediaQuery.tablet}) {
    border-left-width: 1px;
    border-right-width: 1px;
    grid-column: 2;
  }
`;

export const Styled = {
  Image,
};
