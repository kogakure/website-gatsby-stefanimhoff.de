import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Styled } from './post.styles';

export type PostProps = {
  body: string;
};

export const Post = ({ body, ...props }: PostProps) => (
  <Styled.Post {...props}>
    <MDXRenderer>{body}</MDXRenderer>
  </Styled.Post>
);
