import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Image } from '../../../components/image';

const HaikuImageContainer = styled.div`
  grid-column: 1 / -3;
  grid-row: 3;

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / -4;
  }
`;

const HaikuImage = styled(Image)`
  border-left-width: 0;
`;

export const Styled = {
  HaikuImage,
  HaikuImageContainer,
};
