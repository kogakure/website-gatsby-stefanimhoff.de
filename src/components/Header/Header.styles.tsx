import styled from 'styled-components';

import { mediaQueries } from '../../themes/tokens';

const HeaderWrapper = styled.header`
  background: var(--colorBackground);

  @media (${mediaQueries.tablet}) {
    background: var(--colorPrimary);
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 96rem;
  padding: 1rem;
`;

export const Styled = {
  HeaderWrapper,
  HeaderContainer,
};
