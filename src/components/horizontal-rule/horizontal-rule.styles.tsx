import styled, { css } from 'styled-components';

import { space, borderStyle, borderWidth } from '../../layout/tokens';

type HorizontalRuleTransientProps = {
  $noMargin?: boolean;
};

const HorizontalRule = styled.hr<HorizontalRuleTransientProps>`
  border-bottom-width: ${borderWidth[10]};
  border-color: var(--colorForegroundFeather);
  border-left-width: 0;
  border-right-width: 0;
  border-style: ${borderStyle.solid};
  border-top-width: 0;
  width: 100%;
  ${({ $noMargin }) =>
    !$noMargin &&
    css`
      margin-bottom: ${space[14]};
      margin-top: ${space[14]};
    `}
`;

export const Styled = {
  HorizontalRule,
};
