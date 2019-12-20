import { createGlobalStyle } from 'styled-components';

import globalCSS from './styles/global.css';
import highlightCodeLine from './styles/highlight-code-line.css';

const GlobalStyles = createGlobalStyle`
${globalCSS}
${highlightCodeLine}
`;

export { GlobalStyles };
