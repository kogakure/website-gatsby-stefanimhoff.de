import styled from 'styled-components';
import type { GatsbyImageProps } from 'gatsby-image';

import { mediaQuery } from '../../../layout/tokens';
import { Image as XingIllustrationsImage } from '../../../components/image';

const Image = styled(XingIllustrationsImage)<GatsbyImageProps>`
  border-left-width: 0;
  border-right-width: 0;

  @media (${mediaQuery.tablet}) {
    border-right-width: 1px;
  }
`;

export const Styled = {
  Image,
};
