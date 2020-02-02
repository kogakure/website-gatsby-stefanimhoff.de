import { Link } from 'gatsby';
import styled from 'styled-components';
import { fontWeight, fontSize } from 'styled-system';

const TextLinkHref = styled.a`
  ${fontSize};
  ${fontWeight};
  background: red;
  color: black;
`;

const TextLinkRouter = styled(Link)`
  ${fontSize};
  ${fontWeight};
  background: green;
  color: black;
`;

export const Styled = {
  TextLinkHref,
  TextLinkRouter,
};
