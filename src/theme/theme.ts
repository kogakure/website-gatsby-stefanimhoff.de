import { ThemeProps, BreakPointProps } from './theme.d';

const common: BreakPointProps = {
  breakpoints: ['768px', '1050px', '1440px'],
};

const light: ThemeProps = {
  colors: {
    primary: '#663399',
  },
  textStyles: {
    headline: {
      fontSize: ['20px', '50px', '100px'],
      color: '#000',
      fontWeight: 900,
      lineHeight: '1.0',
    },
    paragraph: {
      fontSize: '20px',
      color: '#222',
      fontWeight: 300,
      lineHeight: '1.6',
    },
  },
};

const dark: ThemeProps = {
  colors: {
    primary: 'red',
  },
  textStyles: {
    headline: {
      fontSize: ['20px', '50px', '100px'],
      color: 'red',
      fontWeight: 900,
      lineHeight: '1.0',
    },
    paragraph: {
      fontSize: '20px',
      color: 'lightgrey',
      fontWeight: 300,
      lineHeight: '1.6',
    },
  },
};

export { common, light, dark };
