import * as React from 'react';

import { Title as TitleComponent } from '../../../components/typography';

import { Styled } from './title.styles';

export const Title = () => (
  <Styled.Title>
    <TitleComponent noMargin>Haiku</TitleComponent>
  </Styled.Title>
);
