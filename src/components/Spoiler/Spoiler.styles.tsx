import styled from 'styled-components';

const Spoiler = styled.span<{ layout?: string; spoiler: boolean }>`
  background: ${({ spoiler }) =>
    spoiler ? 'var(--colorPrimary)' : 'var(--colorBackground)'};
  color: var(--colorPrimary);
  cursor: ${({ spoiler }) => (spoiler ? 'help' : 'default')};
  display: ${({ layout }) => (layout === 'block' ? 'block' : 'inline')};
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
