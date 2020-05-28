import * as React from 'react';

import { Styled } from './cover-image.styles';
import { BonsaiImage } from './bosai-image';

export const CoverImage: React.FC = () => (
  <Styled.CoverImage>
    <BonsaiImage />
  </Styled.CoverImage>
);
