import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Title as TitleComponent } from '../../../components/typography';

export const Title = styled(TitleComponent)`
  grid-column: 2 / -2;
  grid-row: 1;
  margin: 0;

  @media (${mediaQuery.tablet}) {
    grid-column: 5 / -7;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 8 / -7;
  }
`;

export const Styled = {
  Title,
};
