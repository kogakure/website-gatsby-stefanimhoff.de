import { createGlobalStyle } from 'styled-components';

import { ThemeType, ThemeProps } from '../../typings/Theme';
import { lightColors, darkColors } from '../../themes/tokens/colors';

import globalCSS from './styles/global.css';
import highlightCodeLine from './styles/highlight-code-line.css';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType & ThemeProps }>`
  ${globalCSS}
  ${highlightCodeLine}

  .light {
    --colorPrimary: ${lightColors.primary};
    --colorBackground: ${lightColors.background}
  }

  .light .green {
    --colorPrimary: black;
    --colorBackground: lightgreen;
  }

  .dark {
    --colorPrimary: ${darkColors.primary};
    --colorBackground: ${darkColors.background}
  }

  .dark .green {
    --colorPrimary: black;
    --colorBackground: darkgreen;
  }
`;

export { GlobalStyles };
