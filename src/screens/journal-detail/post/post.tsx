import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Styled } from './post.styles';

export type PostProps = {
  body: string;
};

export const Post: React.FC<PostProps> = ({ body, ...props }) => (
  <Styled.Post {...props}>
    <MDXRenderer>{body}</MDXRenderer>
  </Styled.Post>
);
