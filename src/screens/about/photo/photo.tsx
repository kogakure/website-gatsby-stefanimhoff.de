import * as React from 'react';

import { PortraitPhoto } from './portrait-photo';
import { Styled } from './photo.styles';

export const Photo: React.FC = () => (
  <Styled.Photo>
    <PortraitPhoto />
  </Styled.Photo>
);
