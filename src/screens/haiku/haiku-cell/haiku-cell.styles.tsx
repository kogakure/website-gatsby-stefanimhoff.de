import styled from 'styled-components';

import { fontSize, fontWeight } from '../../../layout/tokens';

import { HaikuCellProps } from './haiku-cell';

const Cell = styled.div<HaikuCellProps>`
  ${({ dark }) => dark && 'background: var(--colorBackgroundDark)'};
  align-items: center;
  display: grid;
  height: 100%;
  width: 100%;
`;

const PreFormated = styled.pre`
  font-family: inherit;
  font-size: ${fontSize[3]};
  font-weight: ${fontWeight.black};
  margin-bottom: clamp(50px, 5.55vw, 150px);
  margin-top: clamp(50px, 5.55vw, 150px);
  text-align: center;
  width: 100%;

  @media (min-width: 25rem) {
    font-size: ${fontSize[4]};
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`;

export const Styled = {
  Cell,
  PreFormated,
};
