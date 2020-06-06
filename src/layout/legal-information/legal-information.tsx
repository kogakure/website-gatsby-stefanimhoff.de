import * as React from 'react';

import { Styled } from './legal-information.styles';

export const LegalInformation: React.FC = ({ ...props }) => (
  <Styled.LegalInformation {...props}>
    <div>
      <Styled.Copyright>© </Styled.Copyright>
      <Styled.Author>
        <Styled.AuthorLink to="/imprint/">Stefan Imhoff</Styled.AuthorLink>
      </Styled.Author>
      <Styled.Bullet> / </Styled.Bullet>
      <Styled.Year>
        <time dateTime={String(new Date().getFullYear())}>
          2006–{new Date().getFullYear()}
        </time>
      </Styled.Year>
    </div>
  </Styled.LegalInformation>
);
