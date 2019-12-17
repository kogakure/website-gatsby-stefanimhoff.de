import styled from 'styled-components';

import { media } from '../../global/MediaQueries';

const HeaderWrapper = styled.div`
  background: black;

  @media (${media.tablet}) {
    background: ${props => props.theme.colors.primary};
  }
`;

const HeaderContainer = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  padding: 1rem;
`;

export const Styled = {
  HeaderWrapper,
  HeaderContainer,
};
