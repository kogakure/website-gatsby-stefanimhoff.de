import { common } from '../theme/Theme';

const [phone, tablet, desktop] = common.breakpoints;

const media = {
  phone: `min-width: ${phone}`,
  tablet: `min-width: ${tablet}`,
  desktop: `min-width: ${desktop}`,
};

export { media };
