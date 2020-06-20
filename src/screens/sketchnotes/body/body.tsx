import * as React from 'react';
import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx';

import { MDXProviderContainer } from '../../../layout/mdx-provider-container';

import { Styled } from './body.styles';

export const Body: React.FC<MDXRendererProps> = ({ children, ...props }) => (
  <Styled.Body {...props}>
    <MDXProviderContainer>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProviderContainer>
  </Styled.Body>
);
