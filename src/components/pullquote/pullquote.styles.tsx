import styled from 'styled-components';

import { fontWeight, lineHeight, fontSize, space } from '../../layout/tokens';

const Pullquote = styled.blockquote`
  padding: ${space[9]};
  text-align: center;

  &[lang|='ja'] {
    font-style: normal;
  }

  & p {
    font-size: ${fontSize[4]};
    font-weight: ${fontWeight.black};
    line-height: ${lineHeight[1]};
    margin: ${space[0]};
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
  font-size: ${fontSize[2]};
  font-weight: normal;
  margin-top: ${space[6]};
`;

const Author = styled.b`
  font-style: normal;
`;

const Source = styled.cite``;

export const Styled = {
  Author,
  Footer,
  Pullquote,
  Source,
};
