import styled from 'styled-components';

import { space } from '../../themes/tokens';

const Spoiler = styled.span<{ block?: boolean; spoiler: boolean }>`
  background: ${({ spoiler }) =>
    spoiler ? 'var(--colorPrimary)' : 'var(--colorBackground)'};
  color: var(--colorPrimary);
  cursor: ${({ spoiler }) => (spoiler ? 'help' : 'default')};
  display: ${({ block }) => (block ? 'block' : 'inline')};
  margin-bottom: ${space[12]};
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
