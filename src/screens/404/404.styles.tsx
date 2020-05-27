import styled from 'styled-components';

import {
  fontSize,
  fontWeight,
  lineHeight,
  mediaQuery,
} from '../../layout/tokens';
import { Title } from '../../components/typography';
import { Verse } from '../../components/verse';

export const Title404 = styled(Title)`
  grid-column: 1 / -1;
  grid-row: 1;
  margin-bottom: 0;
  z-index: 1;

  @media (${mediaQuery.desktop}) {
    grid-column: 1 / -9;
  }
`;

export const Haiku = styled(Verse)`
  grid-column: 1 / -1;
  grid-row: 2;
  z-index: 1;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / -6;
  }
`;

export const Huge404 = styled.span`
  color: var(--colorForegroundFeather);
  font-size: ${fontSize[9]};
  font-weight: ${fontWeight.black};
  grid-column: -6 / -1;
  grid-row: 2 / 4;
  line-height: ${lineHeight[1]};
  text-align: right;
  writing-mode: vertical-lr;
  z-index: 0;

  @media (${mediaQuery.desktop}) {
    grid-column: -6 / -2;
    grid-row: 1 / 4;
  }
`;
