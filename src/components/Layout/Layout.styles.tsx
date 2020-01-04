import styled from 'styled-components';

const MainLayout = styled.main`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 3fr 1fr;
  max-width: 90%;
  margin: 1rem auto;

  background: ${props => props.theme.colors.background};
`;

export const Styled = {
  MainLayout,
};
