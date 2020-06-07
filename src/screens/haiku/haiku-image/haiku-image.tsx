import * as React from 'react';

import { Styled } from './haiku-image.styles';
import { ForestImage } from './forest-image';

export const HaikuImage: React.FC = () => (
  <Styled.HaikuImage>
    <ForestImage />
  </Styled.HaikuImage>
);
