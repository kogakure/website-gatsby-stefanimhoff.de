import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Image } from '../../../components/image';

const CoverImageContainer = styled.div`
  grid-column: 1 / -3;
  grid-row: 3;

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / -7;
    grid-row: 2;
  }
`;

const CoverImage = styled(Image)`
  border-left-width: 0;
  height: 55vw;

  @media (${mediaQuery.tablet}) {
    height: 40vw;
  }
`;

export const Styled = {
  CoverImage,
  CoverImageContainer,
};
