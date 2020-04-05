import styled from 'styled-components';
import { margin } from 'styled-system';

const Verse = styled.blockquote`
  ${margin};
  display: flex;
  font-style: italic;

  p {
    margin: 0;
  }
`;

const Preformatted = styled.pre`
  font-family: inherit;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
`;

export const Styled = {
  Preformatted,
  Verse,
};
