import * as React from 'react';
import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx';

import { Styled } from './body.styles';

export const Body: React.FC<MDXRendererProps> = ({ children, ...props }) => (
  <Styled.Body {...props}>
    <MDXRenderer>{children}</MDXRenderer>
  </Styled.Body>
);
