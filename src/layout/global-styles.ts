import { createGlobalStyle } from 'styled-components';

import { fontSize, lightColors, darkColors } from './tokens';
import globalCSS from './styles/global.css';
import highlightCodeLine from './styles/highlight-code-line.css';

export const GlobalStyles = createGlobalStyle`
  /* stylelint-disable plugin/stylelint-no-indistinguishable-colors */

  .light {
    --colorAccent: ${lightColors.accent};
    --colorBackground: ${lightColors.background};
    --colorBackgroundFullContrast: ${lightColors.backgroundFullContrast};
    --colorCodeBackground: #282c34;
    --colorCodeForeground: #abb2bf;
    --colorForeground: ${lightColors.foreground};
    --colorForegroundFeaterInverse: ${lightColors.foregroundFeatherInverse};
    --colorForegroundFeather: ${lightColors.foregroundFeather};
    --colorForegroundFullContrast: ${lightColors.foregroundFullContrast};
    --colorForegroundSoft: ${lightColors.foregroundSoft};
    --colorForegroundSoftInverse: ${lightColors.foregroundSoftInverse};
    --colorForegroundStrong: ${lightColors.foregroundStrong};
    --colorForegroundStrongInverse: ${lightColors.foregroundStrongInverse};
    --opacityDark: 1;
    --opacityLight: 0;
  }

  .dark {
    --colorAccent: ${darkColors.accent};
    --colorBackground: ${darkColors.background};
    --colorBackgroundFullContrast: ${darkColors.backgroundFullContrast};
    --colorCodeBackground: #282c34;
    --colorCodeForeground: #abb2bf;
    --colorForeground: ${darkColors.foreground};
    --colorForegroundFeather: ${darkColors.foregroundFeather};
    --colorForegroundFeatherInverse: ${darkColors.foregroundFeatherInverse};
    --colorForegroundFullContrast: ${darkColors.foregroundFullContrast};
    --colorForegroundSoft: ${darkColors.foregroundSoft};
    --colorForegroundSoftInverse: ${darkColors.foregroundSoftInverse};
    --colorForegroundStrong: ${darkColors.foregroundStrong};
    --colorForegroundStrongInverse: ${darkColors.foregroundStrongInverse};
    --opacityDark: 0;
    --opacityLight: 1;
  }

  .light .green {
    --colorAccent: ${lightColors.accentGreen};
    --colorBackground: ${lightColors.backgroundGreen};
    --colorForeground: ${lightColors.foregroundGreen};
  }

  .dark .green {
    --colorAccent: ${lightColors.accentGreen};
    --colorBackground: ${darkColors.backgroundGreen};
    --colorForeground: ${darkColors.foregroundGreen};
  }

  .light .blue {
    --colorAccent: ${lightColors.accentBlue};
    --colorBackground: ${lightColors.backgroundBlue};
    --colorForeground: ${lightColors.foregroundBlue};
  }

  .dark .blue {
    --colorAccent: ${lightColors.accentBlue};
    --colorBackground: ${darkColors.backgroundBlue};
    --colorForeground: ${darkColors.foregroundBlue};
  }

  .light .brown {
    --colorAccent: ${lightColors.accentBrown};
    --colorBackground: ${lightColors.backgroundBrown};
    --colorForeground: ${lightColors.foregroundBrown};
  }

  .dark .brown {
    --colorAccent: ${lightColors.accentBrown};
    --colorBackground: ${darkColors.backgroundBrown};
    --colorForeground: ${darkColors.foregroundBrown};
  }

  p {
    font-size: ${fontSize[3]}
  }

  ${globalCSS}
  ${highlightCodeLine}
`;
