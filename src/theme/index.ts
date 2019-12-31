import { Theme } from 'styled-system';

import {
  lightColors,
  darkColors,
  space,
  breakpoints,
  typographicScale,
} from './tokens';

export const defaultTheme: Theme = {
  ...breakpoints,
  fontSizes: {
    ...typographicScale,
  },
  space: {
    ...space,
  },
};

export const light: Theme = {
  ...defaultTheme,
  colors: {
    ...lightColors,
  },
};

export const dark: Theme = {
  ...defaultTheme,
  fontSizes: {
    ...typographicScale,
  },
  colors: {
    ...darkColors,
  },
};
