import { createGlobalStyle } from 'styled-components';

import { ThemeType, ThemeProps } from '../typings/theme';

import { typographicScale, lightColors, darkColors } from './tokens';
import globalCSS from './styles/global.css';
import highlightCodeLine from './styles/highlight-code-line.css';

export const GlobalStyles = createGlobalStyle<{
  theme: ThemeType & ThemeProps;
}>`
  /* stylelint-disable plugin/stylelint-no-indistinguishable-colors */

  .light {
    --colorAccent: ${lightColors.accent};
    --colorBackground: ${lightColors.background};
    --colorBackgroundFullContrast: ${lightColors.backgroundFullContrast};
    --colorLink: ${lightColors.linkUnderline};
    --colorLinkActive: ${lightColors.linkUnderlineActive};
    --colorLogo: ${lightColors.logo};
    --colorText: ${lightColors.text};
    --colorTextFullContrast: ${lightColors.textFullContrast};
    --colorTextSoft: ${lightColors.textSoft};
    --colorTextSoftInverse: ${lightColors.borderSoftInverse};
    --colorTextStrong: ${lightColors.textStrong};
    --colorTextStrongInverse: ${lightColors.textStrongInverse};
    --opacityDark: 1;
    --opacityLight: 0;
  }

  .dark {
    --colorAccent: ${darkColors.accent};
    --colorBackground: ${darkColors.background};
    --colorBackgroundFullContrast: ${darkColors.backgroundFullContrast};
    --colorLink: ${darkColors.linkUnderline};
    --colorLinkActive: ${darkColors.linkUnderlineActive};
    --colorLogo: ${darkColors.logo};
    --colorText: ${darkColors.text};
    --colorTextFullContrast: ${darkColors.textFullContrast};
    --colorTextSoft: ${darkColors.textSoft};
    --colorTextSoftInverse: ${darkColors.borderSoftInverse};
    --colorTextStrong: ${darkColors.textStrong};
    --colorTextStrongInverse: ${darkColors.textStrongInverse};
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

  p {
    font-size: ${typographicScale[3]}
  }

  ${globalCSS}
  ${highlightCodeLine}
`;
