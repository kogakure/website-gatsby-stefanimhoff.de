import { Theme } from 'styled-system';

import {
  breakpoints,
  darkColors,
  lightColors,
  lineHeights,
  space,
  typographicScale,
} from './tokens';

const defaultTheme: Theme = {
  ...breakpoints,
  fontSizes: {
    ...typographicScale,
  },
  space: {
    ...space,
  },
  lineHeights: {
    ...lineHeights,
  },
};

const lightTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...lightColors,
  },
};

const darkTheme: Theme = {
  ...defaultTheme,
  fontSizes: {
    ...typographicScale,
  },
  colors: {
    ...darkColors,
  },
  lineHeights: {
    ...lineHeights,
  },
};

export { darkTheme, lightTheme };
