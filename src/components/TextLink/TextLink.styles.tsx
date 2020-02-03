import { Link } from 'gatsby';
import styled from 'styled-components';
import { fontWeight, fontSize } from 'styled-system';

const TextLinkHref = styled.a`
  ${fontSize};
  ${fontWeight};
  color: var(--colorText);

  text-decoration-color: var(--textColor);
  text-decoration-thickness: 0.15em;
  text-underline-offset: 0.15em;

  &:hover,
  &:focus {
    text-decoration-color: var(--colorLink);

    @supports (not (text-decoration-color: red)) {
      color: var(--colorLink);
    }
  }
`;

const TextLinkRouter = styled(Link)`
  ${fontSize};
  ${fontWeight};
  color: var(--colorText);
`;

export const Styled = {
  TextLinkHref,
  TextLinkRouter,
};
