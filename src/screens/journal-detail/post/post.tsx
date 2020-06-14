import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { MDXProviderContainer } from '../../../layout/mdx-provider-container';

import { Styled } from './post.styles';

export type PostProps = {
  body: string;
};

export const Post: React.FC<PostProps> = ({ body, ...props }) => (
  <Styled.Post {...props}>
    <MDXProviderContainer>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProviderContainer>
  </Styled.Post>
);
