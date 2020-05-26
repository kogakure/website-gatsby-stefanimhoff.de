import styled from 'styled-components';

import { UpLink } from '../up-link';
import { LegalInformation } from '../legal-information';

const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: clamp(50px, 5.55vw, 150px);
  margin-top: 5.55vw;
`;

const GridLegalInformation = styled(LegalInformation)`
  grid-column: 1 / -3;
  grid-row: 1;
`;

const GridUpLink = styled(UpLink)`
  align-self: center;
  grid-column: -2;
  grid-row: 1;
  justify-self: center;
`;

export const Styled = {
  Footer,
  GridLegalInformation,
  GridUpLink,
};
