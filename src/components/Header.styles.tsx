import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: ${props => props.theme.colorPrimary};
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
