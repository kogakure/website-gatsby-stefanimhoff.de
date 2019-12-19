import { ThemeProps, BreakPointProps } from '../typings/Theme';

const common: BreakPointProps = {
  breakpoints: ['768px', '1050px', '1440px'],
};

const light: ThemeProps = {
  colors: {
    background: 'lightgrey',
    primary: 'darkgrey',
  },
  textStyles: {
    headline: {
      fontSize: ['20px', '50px', '100px'],
      color: 'darkgrey',
      fontWeight: 900,
      lineHeight: '1.0',
    },
    paragraph: {
      fontSize: '20px',
      color: 'darkgrey',
      fontWeight: 300,
      lineHeight: '1.6',
    },
  },
};

const dark: ThemeProps = {
  colors: {
    background: 'darkgrey',
    primary: 'lightgrey',
  },
  textStyles: {
    headline: {
      fontSize: ['20px', '50px', '100px'],
      color: 'lightgrey',
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
