import * as React from 'react';

import { Title as TitleComponent } from '../../../components/typography';

import { Styled } from './title.styles';

export const Title: React.FC = () => (
  <Styled.Title>
    <TitleComponent noMargin>Haiku</TitleComponent>
  </Styled.Title>
);
