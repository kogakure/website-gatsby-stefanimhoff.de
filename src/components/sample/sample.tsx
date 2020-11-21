import * as React from 'react';

import { Styled } from './sample.styles';

export type SampleProps = {
  children: React.ReactNode;
};

export const Sample = ({ children, ...props }: SampleProps) => (
  <Styled.Sample {...props}>{children}</Styled.Sample>
);
