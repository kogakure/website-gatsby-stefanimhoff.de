import { createGlobalStyle } from 'styled-components';

import globalCSS from './styles/global.css';

const GlobalStyles = createGlobalStyle`
${globalCSS}
`;

export { GlobalStyles };
