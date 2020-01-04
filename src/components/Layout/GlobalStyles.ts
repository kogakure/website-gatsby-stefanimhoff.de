import { createGlobalStyle } from 'styled-components';

import { ThemeType, ThemeProps } from '../../typings/Theme';

import globalCSS from './styles/global.css';
import highlightCodeLine from './styles/highlight-code-line.css';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType & ThemeProps }>`
  ${globalCSS}
  ${highlightCodeLine}

  body {
    background: ${({ theme }) => theme.colors.background} !important;
  }
`;

export { GlobalStyles };
