import styled from 'styled-components';

import { borderStyle, borderWidth, shadow } from '../../layout/tokens';

const Mark = styled.mark`
  /* stylelint-disable plugin/stylelint-no-indistinguishable-colors */
  background-color: rgba(230, 240, 40, 0.8);
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;
  border-style: ${borderStyle.solid};
  border-width: ${borderWidth[1]};
  box-shadow: ${shadow.darkInset};
  color: rgba(0, 0, 0, 0.75);
  padding-left: 0.2em;
  padding-right: 0.2em;
`;

export const Styled = {
  Mark,
};
