import styled, { css } from 'styled-components';

import { MainProps } from '.';

export const sizes = {
  fullsize: css`
    grid-column: 1 / -1;
  `,
  regular: css`
    grid-column: 3 / -3;
  `,
  narrow: css`
    grid-column: 7 / -7;
  `,
};

export const Main = styled.main<MainProps>`
  ${({ size }) => sizes[size]}
  width: 100%;
`;

export const Styled = {
  Main,
};
