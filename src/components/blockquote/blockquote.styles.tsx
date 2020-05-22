import styled from 'styled-components';
import { margin } from 'styled-system';

import { typographicScale, space } from '../../layout/tokens';

const Blockquote = styled.blockquote`
  ${margin};
  font-style: italic;

  &[lang|='ja'] {
    font-style: normal;
  }

  & p {
    margin-bottom: ${space[7]};
  }

  & p:first-child::before {
    content: open-quote;
    font-style: normal;
  }

  & p:nth-of-type(1):first-letter {
    margin-left: -0.4em;
  }

  &[lang|='de'] p:nth-of-type(1):first-letter {
    margin-left: -0.6em;
  }

  &[lang|='ja'] p:nth-of-type(1):first-letter {
    margin-left: -1em;
  }

  & p:nth-last-of-type(1)::after {
    content: close-quote;
    font-style: normal;
  }
`;

const Footer = styled.footer`
  font-size: ${typographicScale[3]};
`;

const Author = styled.b`
  font-style: normal;
`;

const Source = styled.cite``;

export const Styled = {
  Blockquote,
  Footer,
  Author,
  Source,
};
