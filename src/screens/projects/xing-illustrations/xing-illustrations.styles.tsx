import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Image as XingIllustrationsImage } from '../../../components/image';

const Image = styled(XingIllustrationsImage)`
  border-left-width: 0;
  border-right-width: 0;

  @media (${mediaQuery.tablet}) {
    border-right-width: 1px;
  }
`;

export const Styled = {
  Image,
};
