import styled from 'styled-components';

const Emoji = styled.span`
  font-size: clamp(2rem, 4vw, 3rem);

  h1 &,
  h2 &,
  h3 & {
    font-size: 1em;
  }

  p & {
    font-size: 1.5em;
    line-height: 0.8;
    position: relative;
    top: 0.1em;
  }
`;

export const Styled = {
  Emoji,
};
