import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Title as TitleComponent } from '../../../components/typography';

const Title = styled(TitleComponent)`
  grid-column: 2 / -2;
  grid-row: 1;
  margin-bottom: 0;
  z-index: 1;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / -3;
  }
`;

export const Styled = {
  Title,
};
