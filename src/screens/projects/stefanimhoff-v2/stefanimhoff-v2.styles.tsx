import styled from 'styled-components';
import type { GatsbyImageProps } from 'gatsby-image';

import { mediaQuery } from '../../../layout/tokens';
import { Image as StefanImhoffV2Image } from '../../../components/image';

const Image = styled(StefanImhoffV2Image)<GatsbyImageProps>`
  border-left-width: 0;
  border-right-width: 0;

  @media (${mediaQuery.tablet}) {
    border-left-width: 1px;
    border-right-width: 1px;
  }
`;

export const Styled = {
  Image,
};
