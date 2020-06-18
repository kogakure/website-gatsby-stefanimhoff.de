import styled from 'styled-components';

import { space } from '../../../layout/tokens';

const Colors = styled.div`
  display: grid;
  grid-gap: ${space[5]};
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  width: 100%;
`;

export const Styled = {
  Colors,
};
