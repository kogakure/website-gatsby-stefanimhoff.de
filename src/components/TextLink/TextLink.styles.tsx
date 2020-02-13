import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';
import { fontSize } from 'styled-system';

const linkStyles = css`
  ${fontSize};
  color: var(--colorText);
  text-decoration-color: var(--colorLink);
  text-decoration-thickness: 0.1em;
  text-underline-offset: 0.1em;

  &:hover,
  &:focus {
    text-decoration-color: var(--colorLinkActive);

    @supports (not (text-decoration-color: red)) {
      color: var(--colorLink);
    }
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
