import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Image } from '../../../components/image';

const PortraitPhoto = styled(Image)`
  border-left-width: 0;
  grid-column: 1 / 12;
  grid-row: 2;

  @media (${mediaQuery.tablet}) {
    border-left-width: 1px;
    grid-column: 4 / 10;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 7 / 10;
  }
`;

export const Styled = {
  PortraitPhoto,
};
