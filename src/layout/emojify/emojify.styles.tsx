import styled from 'styled-components';

const Emoji = styled.span`
  div > & {
    font-size: 4em;
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
