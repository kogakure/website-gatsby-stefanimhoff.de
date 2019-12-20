import { ThemeProps, BreakPointProps } from '../typings/Theme';

const common: BreakPointProps = {
  breakpoints: ['768px', '1050px', '1440px'],
};

const light: ThemeProps = {
  colors: {
    background: 'lightgrey',
    primary: 'black',
  },
  textStyles: {
    headline: {
      fontSize: ['20px', '50px', '100px'],
      color: 'black',
      fontWeight: 900,
      lineHeight: '1.0',
    },
    paragraph: {
      fontSize: '20px',
      color: 'black',
      fontWeight: 300,
      lineHeight: '1.6',
    },
  },
};

const dark: ThemeProps = {
  colors: {
    background: 'black',
    primary: 'white',
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
