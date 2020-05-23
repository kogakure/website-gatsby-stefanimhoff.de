import styled from 'styled-components';

import { space } from '../../layout/tokens';

const Verse = styled.blockquote`
  display: flex;
  font-style: italic;
  margin: ${space[10]};

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
