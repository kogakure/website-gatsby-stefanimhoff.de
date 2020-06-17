import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Image } from '../../../components/image';

const CoverImage = styled(Image)`
  border-left-width: 0;
  grid-column: 1 / -3;
  grid-row: 3;
  height: 55vw;
  object-fit: cover;

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / -7;
    grid-row: 2;
    height: 40vw;
  }
`;

export const Styled = {
  CoverImage,
};
