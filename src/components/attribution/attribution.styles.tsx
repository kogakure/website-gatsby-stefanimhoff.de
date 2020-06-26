import styled from 'styled-components';

import { space } from '../../layout/tokens';

const Attribution = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: ${space[3]};
`;

const Author = styled.span`
  white-space: nowrap;
`;

export const Styled = {
  Attribution,
  Author,
  ListItem,
};
