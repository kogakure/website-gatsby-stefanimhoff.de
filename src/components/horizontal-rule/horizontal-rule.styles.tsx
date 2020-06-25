import styled, { css } from 'styled-components';

import { space, borderStyle, borderWidth } from '../../layout/tokens';

import { HorizontalRuleProps } from './horizontal-rule';

const HorizontalRule = styled.hr<HorizontalRuleProps>`
  border-bottom-width: ${borderWidth[10]};
  border-color: var(--colorForegroundFeather);
  border-left-width: 0;
  border-right-width: 0;
  border-style: ${borderStyle.solid};
  border-top-width: 0;
  ${({ noMargin }) =>
    !noMargin &&
    css`
      margin-bottom: ${space[14]};
      margin-top: ${space[14]};
    `}
`;

export const Styled = {
  HorizontalRule,
};
