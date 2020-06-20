import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Image as IgaNinjaFontImage } from '../../../components/image';

const Image = styled(IgaNinjaFontImage)`
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
