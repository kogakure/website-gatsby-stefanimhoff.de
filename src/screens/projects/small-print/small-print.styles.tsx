import styled from 'styled-components';

import { fontSize, mediaQuery } from '../../../layout/tokens';

const Text = styled.small`
  color: var(--colorForegroundStrong);
  display: block;
  font-size: ${fontSize[2]};
  font-variant: small-caps;
  line-height: 1;

  @media (${mediaQuery.tablet}) {
    padding: 0;
  }
`;

export const Styled = {
  Text,
};
