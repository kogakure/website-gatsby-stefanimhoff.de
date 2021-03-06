import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Title as TitleComponent } from '../../../components/typography';

const Title = styled(TitleComponent)`
  grid-column: 1 / -1;
  grid-row: 1;
  margin-bottom: 0;
  z-index: 1;

  @media (${mediaQuery.desktop}) {
    grid-column: 1 / -9;
  }
`;

export const Styled = {
  Title,
};
