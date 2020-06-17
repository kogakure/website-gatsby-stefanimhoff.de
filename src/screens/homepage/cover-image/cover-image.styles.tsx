import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Image } from '../../../components/image';

const CoverImage = styled(Image)`
  border-left-width: 0;
  grid-column: 1 / -5;
  grid-row: 2;

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / -9;
  }
`;

export const Styled = {
  CoverImage,
};
