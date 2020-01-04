import styled from 'styled-components';

import { mediaQueries } from '../../theme/tokens';

const HeaderWrapper = styled.div`
  background: ${props => props.theme.colors.background};

  @media (${mediaQueries.tablet}) {
    background: ${props => props.theme.colors.primary};
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
