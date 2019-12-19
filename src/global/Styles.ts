import { createGlobalStyle } from 'styled-components';

import globalCSS from './styles/global.css';
import prismTheme from './styles/prism-material-dark.css';
import highlightCodeLine from './styles/highlight-code-line.css';

const GlobalStyles = createGlobalStyle`
${globalCSS}
${prismTheme}
${highlightCodeLine}
`;

export { GlobalStyles };
