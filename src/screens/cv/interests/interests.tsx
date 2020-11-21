import * as React from 'react';

import { CvInterests } from '../../../typings/graphql';
import { Headline } from '../../../components/typography';

import { Styled } from './interests.styles';

export type InterestsProps = {
  data: CvInterests;
};

export const Interests = ({ data, ...props }: InterestsProps) => (
  <Styled.Interests {...props}>
    <Headline>{data.headline}</Headline>
    <Styled.List>
      {data.items.map((interest) => (
        <li key={interest}>{interest}</li>
      ))}
    </Styled.List>
  </Styled.Interests>
);
