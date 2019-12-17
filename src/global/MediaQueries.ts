import { theme } from '../theme';

const [phone, tablet, desktop] = theme.breakpoints;

const media = {
  phone: `min-width: ${phone}`,
  tablet: `min-width: ${tablet}`,
  desktop: `min-width: ${desktop}`,
};

export { media };
