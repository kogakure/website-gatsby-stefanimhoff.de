import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';

import { fontWeight } from '../../layout/tokens';

type TextLinkTransientProps = {
  $block?: boolean;
};

const linkStyles = css`
  color: var(--colorForeground);
  font-weight: ${fontWeight.bold};
  text-decoration-color: var(--colorForegroundSoft);
  text-decoration-thickness: 0.1em;
  text-underline-offset: 0.1em;

  &:hover,
  &:focus {
    text-decoration-color: var(--colorAccent);
  }
`;

const TextLinkRouter = styled(GatsbyLink)<TextLinkTransientProps>`
  ${linkStyles};
  ${({ $block }) => $block && 'display: block'};
`;

const TextLinkHref = styled.a<TextLinkTransientProps>`
  ${linkStyles}
  ${({ $block }) => $block && 'display: block'};
`;

export const Styled = {
  TextLinkHref,
  TextLinkRouter,
};
