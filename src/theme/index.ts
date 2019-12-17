import { ThemeProps } from './theme.d';

const theme: ThemeProps = {
  breakpoints: ['768px', '1050px', '1440px'],
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

export { theme };
