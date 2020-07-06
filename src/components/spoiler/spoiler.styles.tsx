import styled from 'styled-components';

import { space } from '../../layout/tokens';

import { SpoilerProps } from '.';

const Spoiler = styled.span<SpoilerProps & { spoiler: boolean }>`
  background: ${({ spoiler }) =>
    spoiler ? 'var(--colorForeground)' : 'var(--colorBackground)'};
  color: var(--colorForeground);
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

const Hidden = styled.strong`
  display: none;
`;

export const Styled = {
  Hidden,
  Spoiler,
};
