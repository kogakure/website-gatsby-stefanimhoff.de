import { createGlobalStyle } from 'styled-components';

import { ThemeType, ThemeProps } from '../../typings/Theme';
import { lightColors, darkColors } from '../../themes/tokens/colors';

import globalCSS from './styles/global.css';
import highlightCodeLine from './styles/highlight-code-line.css';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType & ThemeProps }>`
  /* stylelint-disable plugin/stylelint-no-indistinguishable-colors */
  ${globalCSS}
  ${highlightCodeLine}

  .light {
    --colorPrimary: ${lightColors.primary};
    --colorBackground: ${lightColors.background};
    --colorBackgroundFull: #FFF;
    --colorTextFull: #000;
    --colorBorder: rgba(0, 0, 0, 0.2);
    --opacityLight: 0;
    --opacityDark: 1;
  }

  .light .green {
    --colorPrimary: darkgrey;
    --colorBackground: lightgreen;
    --colorBackgroundFull: #FFF;
    --colorTextFull: #000;
    --colorBorder: rgba(0, 0, 0, 0.2);
    --opacityLight: 0;
    --opacityDark: 1;
  }

  .dark {
    --colorPrimary: ${darkColors.primary};
    --colorBackground: ${darkColors.background};
    --colorBackgroundFull: #000;
    --colorTextFull: #FFF;
    --colorBorder: rgba(255, 255, 255, 0.2);
    --opacityLight: 1;
    --opacityDark: 0;
  }

  .dark .green {
    --colorPrimary: darkgrey;
    --colorBackground: darkgreen;
    --colorBackgroundFull: #000;
    --colorTextFull: #FFF;
    --colorBorder: rgba(255, 255, 255, 0.2);
    --opacityLight: 1;
    --opacityDark: 0;
  }
`;

export { GlobalStyles };
