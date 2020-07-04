import * as React from 'react';

import { Styled } from './image-block.styles';

export const ImageBlock: React.FC = ({ children, ...props }) => (
  <Styled.ImageBlock {...props}>{children}</Styled.ImageBlock>
);
