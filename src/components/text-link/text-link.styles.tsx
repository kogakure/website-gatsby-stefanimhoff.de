import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';

import { fontWeight } from '../../layout/tokens';

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

const TextLinkRouter = styled(GatsbyLink)`
  ${linkStyles};
`;

const TextLinkHref = styled.a`
  ${linkStyles}
`;

export const Styled = {
  TextLinkHref,
  TextLinkRouter,
};
