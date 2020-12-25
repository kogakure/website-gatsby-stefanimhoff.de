import styled from 'styled-components';
import type { GatsbyImageProps } from 'gatsby-image';

import { mediaQuery } from '../../../layout/tokens';
import { Image as OsteopathieHamburgImage } from '../../../components/image';

const Image = styled(OsteopathieHamburgImage)<GatsbyImageProps>`
  border-left-width: 0;
  border-right-width: 0;
  grid-row: 1;

  @media (${mediaQuery.tablet}) {
    border-left-width: 1px;
    border-right-width: 1px;
  }
`;

export const Styled = {
  Image,
};
