import * as React from 'react';

import { CvAwards } from '../../../typings/graphql';
import { Headline } from '../../../components/typography';
import { UnorderedList } from '../../../components/unordered-list';

import { Styled } from './awards.styles';

export type AwardsProps = {
  data: CvAwards;
};

export const Awards: React.FC<AwardsProps> = ({ data, ...props }) => (
  <Styled.Awards {...props}>
    <Headline>{data.headline}</Headline>
    <UnorderedList>
      {data.items.map((award) => (
        <li key={award}>{award}</li>
      ))}
    </UnorderedList>
  </Styled.Awards>
);
