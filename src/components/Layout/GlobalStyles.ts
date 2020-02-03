import { createGlobalStyle } from 'styled-components';

import { ThemeType, ThemeProps } from '../../typings/Theme';
import { lightColors, darkColors } from '../../themes/tokens/colors';

import globalCSS from './styles/global.css';
import highlightCodeLine from './styles/highlight-code-line.css';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType & ThemeProps }>`
  /* stylelint-disable plugin/stylelint-no-indistinguishable-colors */

  .light {
    --colorBackground: ${lightColors.background};
    --colorBackgroundFullContrast: ${lightColors.backgroundFullContrast};
    --colorBorderSoft: ${lightColors.borderSoft};
    --colorLink: ${lightColors.accent};
    --colorLogo: ${lightColors.logo};
    --colorText: ${lightColors.text};
    --colorTextFullContrast: ${lightColors.textFullContrast};
    --opacityDark: 1;
    --opacityLight: 0;
  }

  .dark {
    --colorBackground: ${darkColors.background};
    --colorBackgroundFullContrast: ${darkColors.backgroundFullContrast};
    --colorBorderSoft: ${darkColors.borderSoft};
    --colorLink: ${darkColors.accent};
    --colorLogo: ${darkColors.logo};
    --colorText: ${darkColors.text};
    --colorTextFullContrast: ${darkColors.textFullContrast};
    --opacityDark: 0;
    --opacityLight: 1;
  }

  .light .green {
    --colorBackground: ${lightColors.backgroundGreen};
    --colorLogo: ${lightColors.logoGreen};
    --colorText: ${lightColors.textGreen};
  }

  .dark .green {
    --colorBackground: ${darkColors.backgroundGreen};
    --colorLogo: ${darkColors.logoGreen};
    --colorText: ${darkColors.textGreen};
  }

  .light .blue {
    --colorBackground: ${lightColors.backgroundBlue};
    --colorLogo: ${lightColors.logoBlue};
    --colorText: ${lightColors.textBlue};
  }

  .dark .blue {
    --colorBackground: ${darkColors.backgroundBlue};
    --colorLogo: ${darkColors.logoBlue};
    --colorText: ${darkColors.textBlue};
  }

  .light .brown {
    --colorBackground: ${lightColors.backgroundBrown};
    --colorLogo: ${lightColors.logoBrown};
    --colorText: ${lightColors.textBrown};
  }

  .dark .brown {
    --colorBackground: ${darkColors.backgroundBrown};
    --colorLogo: ${darkColors.logoBrown};
    --colorText: ${darkColors.textBrown};
  }

  ${globalCSS}
  ${highlightCodeLine}
`;

export { GlobalStyles };
