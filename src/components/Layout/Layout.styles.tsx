import styled from 'styled-components';

const MainLayout = styled.main`
  background: var(--colorBackground);
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 3fr 1fr;
  margin: 1rem auto;
  max-width: 90%;
`;

export const Styled = {
  MainLayout,
};
