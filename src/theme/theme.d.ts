export interface ThemeProps {
  breakpoints: string[];
  colors: {
    primary: string;
  };
  textStyles: {
    [key: string]: {
      fontSize?: string | string[];
      color?: string;
      fontWeight?: string | number;
      lineHeight?: string;
    };
  };
}
