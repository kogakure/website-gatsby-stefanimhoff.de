import styled from 'styled-components';

import { space } from '../../../layout/tokens';

const Skills = styled.section``;

const List = styled.ul`
  list-style: none;
  margin-bottom: ${space[10]};
  margin-top: ${space[5]};
  padding: 0;
`;

const ListItem = styled.li`
  display: inline;
`;

export const Styled = {
  Skills,
  List,
  ListItem,
};
