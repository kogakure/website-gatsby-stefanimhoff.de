import styled from 'styled-components';

import { space } from '../../layout/tokens';

const HorizontalRule = styled.hr`
  border-bottom-width: 1px;
  border-color: var(--colorTextSoftInverse);
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-top-width: 0;
  margin-bottom: ${space[14]};
  margin-top: ${space[14]};
  width: 60%;
`;

export const Styled = {
  HorizontalRule,
};
