import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Styled } from './body.styles';

export type PostProps = {
  body: string;
};

export const Body: React.FC<PostProps> = ({ body, ...props }) => (
  <Styled.Body {...props}>
    <MDXRenderer>{body}</MDXRenderer>
  </Styled.Body>
);
