import * as React from 'react';

import { Styled } from './image-block.styles';

type ImageBlockProps = {
  children: React.ReactNode;
};

export const ImageBlock = ({ children, ...props }: ImageBlockProps) => (
  <Styled.ImageBlock {...props}>{children}</Styled.ImageBlock>
);
