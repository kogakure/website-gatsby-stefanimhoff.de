import styled from 'styled-components';

import { space } from '../../layout/tokens';

const Spoiler = styled.span<{ block?: boolean; spoiler: boolean }>`
  background: ${({ spoiler }) =>
    spoiler ? 'var(--colorText)' : 'var(--colorBackground)'};
  color: var(--colorText);
  cursor: ${({ spoiler }) => (spoiler ? 'help' : 'default')};
  display: ${({ block }) => (block ? 'block' : 'inline')};
  margin-bottom: ${({ block }) => (block ? space[12] : null)};
  padding: 0.1rem;

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

export const Styled = {
  Spoiler,
};
