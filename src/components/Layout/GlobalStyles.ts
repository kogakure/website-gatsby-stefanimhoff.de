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
    --colorBackground: ${lightColors.background};
    --opacityLight: 0;
    --opacityDark: 1;
  }

  .light .green {
    --colorPrimary: black;
    --colorBackground: lightgreen;
    --opacityLight: 0;
    --opacityDark: 1;
  }

  .dark {
    --colorPrimary: ${darkColors.primary};
    --colorBackground: ${darkColors.background};
    --opacityLight: 1;
    --opacityDark: 0;
  }

  .dark .green {
    --colorPrimary: black;
    --colorBackground: darkgreen;
    --opacityLight: 1;
    --opacityDark: 0;
  }
`;

export { GlobalStyles };
