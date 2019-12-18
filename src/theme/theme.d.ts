export interface TextStyleProps {
  fontSize?: string | string[];
  color?: string;
  fontWeight?: string | number;
  lineHeight?: string;
}

export interface ColorProps {
  primary: string;
}

export interface ThemeProps {
  breakpoints: string[];
  colors: ColorProps;
  textStyles: {
    [key: string]: TextStyleProps;
  };
}
