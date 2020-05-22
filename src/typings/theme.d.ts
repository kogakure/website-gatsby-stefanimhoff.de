import { lightTheme, darkTheme } from '../layout';

export type BreakPointProps = {
  breakpoints: string[];
};

export type ColorProps = {
  background: string;
  primary: string;
};

export type TextStyleProps = {
  fontSize?: string | string[];
  color?: string;
  fontWeight?: string | number;
  lineHeight?: string;
};

export type ThemeProps = {
  space?: number[];
  colors: ColorProps;
  textStyles: {
    [key: string]: TextStyleProps;
  };
};

export type ThemeType = typeof lightTheme | typeof darkTheme;
