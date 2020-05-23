import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: clamp(50px, 5.55vw, 150px);
  margin-bottom: 11vw;
`;

export const Styled = {
  Grid,
};
