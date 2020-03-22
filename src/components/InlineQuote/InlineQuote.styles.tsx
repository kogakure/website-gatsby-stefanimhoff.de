import styled from 'styled-components';

const InlineQuote = styled.q`
  font-style: italic;

  &[lang|='ja'] {
    font-style: normal;
  }

  &::before {
    font-style: normal;
    margin-right: 0.1em;
  }

  &::after {
    font-style: normal;
    margin-left: 0.1em;
  }
`;

export const Styled = {
  InlineQuote,
};
