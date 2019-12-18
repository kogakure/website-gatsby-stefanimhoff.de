export interface BreakPointProps {
  breakpoints: string[];
}

export interface ColorProps {
  primary: string;
}

export interface TextStyleProps {
  fontSize?: string | string[];
  color?: string;
  fontWeight?: string | number;
  lineHeight?: string;
}

export interface ThemeProps {
  colors?: ColorProps;
  textStyles: {
    [key: string]: TextStyleProps;
  };
}
