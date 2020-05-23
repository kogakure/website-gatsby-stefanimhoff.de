import styled from 'styled-components';
import { Link } from 'gatsby';

const LegalInformation = styled.div`
  align-items: center;
  display: flex;
  padding-left: clamp(15px, 2.4vw, 50px);
`;

const Copyright = styled.span`
  font-size: 14px;
  position: relative;
  top: 1px;
`;

const Author = styled.strong`
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const AuthorLink = styled(Link)`
  color: var(--colorText);
  text-decoration: none;
  text-decoration-color: var(--colorLink);

  &:hover,
  &:focus {
    text-decoration: underline;
    text-decoration-color: var(--colorLinkActive) !important;
    text-decoration-thickness: 0.15em;
    text-underline-offset: 0.15em;

    @supports (not (text-decoration-color: red)) {
      color: var(--colorLink);
    }
  }
`;

const Bullet = styled.span`
  font-size: 12px;
`;

const Year = styled.span`
  font-size: 14px;
`;

export const Styled = {
  Author,
  AuthorLink,
  Bullet,
  Copyright,
  LegalInformation,
  Year,
};
