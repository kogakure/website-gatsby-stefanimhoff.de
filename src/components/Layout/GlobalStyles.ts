import { createGlobalStyle } from 'styled-components';

import { ThemeType, ThemeProps } from '../../typings/Theme';
import { lightColors, darkColors } from '../../themes/tokens/colors';

import globalCSS from './styles/global.css';
import highlightCodeLine from './styles/highlight-code-line.css';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType & ThemeProps }>`
  /* stylelint-disable plugin/stylelint-no-indistinguishable-colors */

  .light {
    --colorText: ${lightColors.text};
    --colorBackground: ${lightColors.background};
    --colorLogo: ${lightColors.logo};
    --colorTextFullContrast: ${lightColors.textFullContrast};
    --colorBackgroundFullContrast: ${lightColors.backgroundFullContrast};
    --colorBorderSoft: ${lightColors.borderSoft};
    --opacityLight: 0;
    --opacityDark: 1;
  }

  .dark {
    --colorText: ${darkColors.text};
    --colorBackground: ${darkColors.background};
    --colorLogo: ${darkColors.logo};
    --colorTextFullContrast: ${darkColors.textFullContrast};
    --colorBackgroundFullContrast: ${darkColors.backgroundFullContrast};
    --colorBorderSoft: ${darkColors.borderSoft};
    --opacityLight: 1;
    --opacityDark: 0;
  }

  .light .green {
    --colorText: ${lightColors.textGreen};
    --colorBackground: ${lightColors.backgroundGreen};
    --colorLogo: ${lightColors.logoGreen};
  }

  .dark .green {
    --colorText: ${darkColors.textGreen};
    --colorBackground: ${darkColors.backgroundGreen};
    --colorLogo: ${darkColors.logoGreen};
  }

  .light .blue {
    --colorText: ${lightColors.textBlue};
    --colorBackground: ${lightColors.backgroundBlue};
    --colorLogo: ${lightColors.logoBlue};
  }

  .dark .blue {
    --colorText: ${darkColors.textBlue};
    --colorBackground: ${darkColors.backgroundBlue};
    --colorLogo: ${darkColors.logoBlue};
  }

  .light .brown {
    --colorText: ${lightColors.textBrown};
    --colorBackground: ${lightColors.backgroundBrown};
    --colorLogo: ${lightColors.logoBrown};
  }

  .dark .brown {
    --colorText: ${darkColors.textBrown};
    --colorBackground: ${darkColors.backgroundBrown};
    --colorLogo: ${darkColors.logoBrown};
  }

  ${globalCSS}
  ${highlightCodeLine}
`;

export { GlobalStyles };
