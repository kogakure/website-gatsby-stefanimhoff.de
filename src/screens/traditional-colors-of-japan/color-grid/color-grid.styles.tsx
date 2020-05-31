import styled from 'styled-components';

export const ColorGrid = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

export const Styled = {
  ColorGrid,
};
