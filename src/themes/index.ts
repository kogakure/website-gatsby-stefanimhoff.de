import { Theme } from 'styled-system';

import {
  breakpoints,
  darkColors,
  fontWeights,
  lightColors,
  lineHeights,
  radii,
  space,
  typographicScale,
} from './tokens';

const defaultTheme: Theme = {
  ...breakpoints,
  fontSizes: {
    ...typographicScale,
  },
  fontWeights,
  radii: {
    ...radii,
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
  colors: {
    ...darkColors,
  },
};

export { darkTheme, lightTheme };
