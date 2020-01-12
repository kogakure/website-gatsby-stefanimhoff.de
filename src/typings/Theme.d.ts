import { lightTheme, darkTheme } from '../themes';

export interface BreakPointProps {
  breakpoints: string[];
}

export interface ColorProps {
  background: string;
  primary: string;
}

export interface TextStyleProps {
  fontSize?: string | string[];
  color?: string;
  fontWeight?: string | number;
  lineHeight?: string;
}

export interface ThemeProps {
  space?: number[];
  colors: ColorProps;
  textStyles: {
    [key: string]: TextStyleProps;
  };
}

export type ThemeType = typeof lightTheme | typeof darkTheme;
