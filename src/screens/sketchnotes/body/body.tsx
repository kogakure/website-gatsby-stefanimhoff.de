import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import type { MDXRendererProps } from 'gatsby-plugin-mdx';

import { Styled } from './body.styles';

export const Body = ({ children, ...props }: MDXRendererProps) => (
  <Styled.Body {...props}>
    <MDXRenderer>{children}</MDXRenderer>
  </Styled.Body>
);
