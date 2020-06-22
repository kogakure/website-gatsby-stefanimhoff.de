import styled from 'styled-components';

import { radius, space } from '../../layout/tokens';

const Banner = styled.aside`
  background-color: var(--colorForegroundFeather);
  border-radius: ${radius[2]};
  margin-bottom: ${space[10]};
  padding: ${space[10]};

  & p:last-of-type {
    margin-bottom: 0;
  }
`;

export const Styled = {
  Banner,
};
