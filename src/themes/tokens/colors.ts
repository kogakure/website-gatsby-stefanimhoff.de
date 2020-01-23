import * as CSS from 'csstype';

export interface ThemeColors {
  text: CSS.ColorProperty;
  textFullContrast: CSS.ColorProperty;
  textGreen: CSS.ColorProperty;
  textBlue: CSS.ColorProperty;
  textBrown: CSS.ColorProperty;
  background: CSS.ColorProperty;
  backgroundFullContrast: CSS.ColorProperty;
  backgroundGreen: CSS.ColorProperty;
  backgroundBlue: CSS.ColorProperty;
  backgroundBrown: CSS.ColorProperty;
  logo: CSS.ColorProperty;
  logoGreen: CSS.ColorProperty;
  logoBlue: CSS.ColorProperty;
  logoBrown: CSS.ColorProperty;
  borderSoft: CSS.ColorProperty;
}

export const lightColors: ThemeColors = {
  text: 'hsl(40, 7%, 5%)',
  textFullContrast: '#000000',
  textGreen: 'hsl(65, 5%, 5%)',
  textBlue: 'hsl(220, 6%, 5%)',
  textBrown: 'hsl(38, 10%, 5%)',
  background: 'hsl(40, 7%, 90%)',
  backgroundFullContrast: '#FFFFFF',
  backgroundGreen: 'hsl(65, 5%, 50%)',
  backgroundBlue: 'hsl(220, 6%, 50%)',
  backgroundBrown: 'hsl(38, 10%, 55%)',
  logo: 'hsl(357, 96%, 46%)',
  logoGreen: 'hsl(65, 5%, 30%)',
  logoBlue: 'hsl(220, 6%, 30%)',
  logoBrown: 'hsl(38, 10%, 30%)',
  borderSoft: 'rgba(255, 255, 255, 0.2)',
};

export const darkColors: ThemeColors = {
  text: 'hsl(40, 7%, 90%)',
  textFullContrast: '#FFFFFF',
  textGreen: 'hsl(65, 5%, 90%)',
  textBlue: 'hsl(220, 6%, 90%)',
  textBrown: 'hsl(38, 10%, 90%)',
  background: 'hsl(40, 7%, 10%)',
  backgroundFullContrast: '#000000',
  backgroundGreen: 'hsl(65, 5%, 20%)',
  backgroundBlue: 'hsl(220, 6%, 20%)',
  backgroundBrown: 'hsl(38, 10%, 20%)',
  logo: 'hsl(357, 96%, 46%)',
  logoGreen: 'hsl(65, 5%, 40%)',
  logoBlue: 'hsl(220, 6%, 40%)',
  logoBrown: 'hsl(38, 10%, 40%)',
  borderSoft: 'rgba(0, 0, 0, 0.2)',
};
