import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  min-height: 100vh;
  overflow-y: scroll;
  z-index: 0;

  @media (min-width: 25rem) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`;

export const Styled = {
  Grid,
};
