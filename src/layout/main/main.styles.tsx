import styled from 'styled-components';

const Main = styled.main`
  flex-grow: 1;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
`;

export const Styled = {
  Main,
  Grid,
};
