import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { MDXProviderContainer } from '../../../layout/mdx-provider-container';

import { Styled } from './body.styles';

export type PostProps = {
  body: string;
};

export const Body: React.FC<PostProps> = ({ body, ...props }) => (
  <Styled.Body {...props}>
    <MDXProviderContainer>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProviderContainer>
  </Styled.Body>
);
