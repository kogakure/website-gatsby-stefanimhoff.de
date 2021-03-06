import styled from 'styled-components';

import { borderStyle, borderWidth, space } from '../../layout/tokens';

const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: ${space[12]};
  margin-top: ${space[12]};
  width: 100%;

  td {
    border-top-color: var(--colorForegroundSoft);
    border-top-style: ${borderStyle.solid};
    border-top-width: ${borderWidth[1]};
  }

  th,
  td {
    padding: ${space[3]};
    text-align: left;
  }
`;

export const Styled = {
  Table,
};
