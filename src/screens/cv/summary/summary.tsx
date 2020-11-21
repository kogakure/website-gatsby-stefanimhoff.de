import * as React from 'react';

import { CvSummary } from '../../../typings/graphql';
import { Subheadline, Paragraph } from '../../../components/typography';

import { Styled } from './summary.styles';

type SummaryProps = {
  data: CvSummary;
};

export const Summary = ({ data, ...props }: SummaryProps) => (
  <Styled.Summary {...props}>
    <Subheadline>{data.headline}</Subheadline>
    <Paragraph noMargin>{data.text}</Paragraph>
  </Styled.Summary>
);
