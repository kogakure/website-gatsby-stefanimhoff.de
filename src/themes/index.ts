import { Theme } from 'styled-system';

import {
  lightColors,
  darkColors,
  space,
  breakpoints,
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
};

export { darkTheme, lightTheme };
