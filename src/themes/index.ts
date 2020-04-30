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

export const defaultTheme: Theme = {
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

export const lightTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...lightColors,
  },
};

export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...darkColors,
  },
};
