import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  td {
    border-top-color: var(--colorTextSoftInverse);
    border-top-style: solid;
    border-top-width: 1px;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
  }
`;

export const Styled = {
  Table,
};
