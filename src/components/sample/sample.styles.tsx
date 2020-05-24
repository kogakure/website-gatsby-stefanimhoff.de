import styled from 'styled-components';

import { fontSize, radius, space } from '../../layout/tokens';

const Sample = styled.samp`
  background-color: var(--colorCodeBackground);
  border-radius: ${radius[4]};
  color: var(--colorCodeText);
  font-size: ${fontSize[2]};
  padding: ${space[1]} ${space[3]};
`;

export const Styled = {
  Sample,
};
