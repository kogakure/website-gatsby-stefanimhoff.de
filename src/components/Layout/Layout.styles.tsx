import styled from 'styled-components';

const MainLayout = styled.main`
  background: ${props => props.theme.colors.background};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 3fr 1fr;
  margin: 1rem auto;
  max-width: 90%;
`;

export const Styled = {
  MainLayout,
};
