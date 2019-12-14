import { createGlobalStyle } from 'styled-components';

import globalCSS from './global.css';

const GlobalStyles = createGlobalStyle`
  ${globalCSS}
`;

export { GlobalStyles };
