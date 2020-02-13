import * as CSS from 'csstype';

export interface ThemeColors {
  accent: CSS.ColorProperty;
  background: CSS.ColorProperty;
  backgroundBlue: CSS.ColorProperty;
  backgroundBrown: CSS.ColorProperty;
  backgroundFullContrast: CSS.ColorProperty;
  backgroundGreen: CSS.ColorProperty;
  borderSoftInverse: CSS.ColorProperty;
  linkUnderline: CSS.ColorProperty;
  linkUnderlineActive: CSS.ColorProperty;
  logo: CSS.ColorProperty;
  logoBlue: CSS.ColorProperty;
  logoBrown: CSS.ColorProperty;
  logoGreen: CSS.ColorProperty;
  text: CSS.ColorProperty;
  textBlue: CSS.ColorProperty;
  textBrown: CSS.ColorProperty;
  textFullContrast: CSS.ColorProperty;
  textGreen: CSS.ColorProperty;
  textSoft: CSS.ColorProperty;
  textStrong: CSS.ColorProperty;
  textStrongInverse: CSS.ColorProperty;
}

export const lightColors: ThemeColors = {
  accent: 'hsl(357, 96%, 46%)',
  background: 'hsl(40, 7%, 90%)',
  backgroundBlue: 'hsl(220, 6%, 50%)',
  backgroundBrown: 'hsl(38, 10%, 55%)',
  backgroundFullContrast: '#FFFFFF',
  backgroundGreen: 'hsl(65, 5%, 50%)',
  borderSoftInverse: 'rgba(0, 0, 0, 0.2)',
  linkUnderline: 'hsla(40, 7%, 5%, 0.2)',
  linkUnderlineActive: 'hsl(357, 96%, 46%)',
  logo: 'hsl(357, 96%, 46%)',
  logoBlue: 'hsl(220, 6%, 30%)',
  logoBrown: 'hsl(38, 10%, 30%)',
  logoGreen: 'hsl(65, 5%, 30%)',
  text: 'hsl(40, 7%, 5%)',
  textBlue: 'hsl(220, 6%, 5%)',
  textBrown: 'hsl(38, 10%, 5%)',
  textFullContrast: '#000000',
  textGreen: 'hsl(65, 5%, 5%)',
  textSoft: 'rgba(255, 255, 255, 0.2)',
  textStrong: 'rgba(255, 255, 255, 0.8)',
  textStrongInverse: 'rgba(0, 0, 0, 0.8)',
};

export const darkColors: ThemeColors = {
  accent: 'hsl(357, 96%, 46%)',
  background: 'hsl(40, 7%, 10%)',
  backgroundBlue: 'hsl(220, 6%, 20%)',
  backgroundBrown: 'hsl(38, 10%, 20%)',
  backgroundFullContrast: '#000000',
  backgroundGreen: 'hsl(65, 5%, 20%)',
  borderSoftInverse: 'rgba(255, 255, 255, 0.2)',
  linkUnderline: 'hsla(40, 7%, 90%, 0.2)',
  linkUnderlineActive: 'hsl(357, 96%, 46%)',
  logo: 'hsl(357, 96%, 46%)',
  logoBlue: 'hsl(220, 6%, 40%)',
  logoBrown: 'hsl(38, 10%, 40%)',
  logoGreen: 'hsl(65, 5%, 40%)',
  text: 'hsl(40, 7%, 90%)',
  textBlue: 'hsl(220, 6%, 90%)',
  textBrown: 'hsl(38, 10%, 90%)',
  textFullContrast: '#FFFFFF',
  textGreen: 'hsl(65, 5%, 90%)',
  textSoft: 'rgba(0, 0, 0, 0.2)',
  textStrong: 'rgba(0, 0, 0, 0.8)',
  textStrongInverse: 'rgba(255, 255, 255, 0.8)',
};
