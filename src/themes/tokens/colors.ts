import * as CSS from 'csstype';

export interface ThemeColors {
  primary: CSS.ColorProperty;
  background: CSS.ColorProperty;
}

export const lightColors: ThemeColors = {
  primary: 'black',
  background: 'white',
};

export const darkColors: ThemeColors = {
  primary: 'white',
  background: 'black',
};
