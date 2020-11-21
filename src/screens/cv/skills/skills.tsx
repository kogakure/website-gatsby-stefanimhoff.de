import * as React from 'react';

import { CvSkills } from '../../../typings/graphql';
import { Headline, Subheadline } from '../../../components/typography';

import { Styled } from './skills.styles';

export type SkillsProps = {
  data: CvSkills;
};

export const Skills = ({ data, ...props }: SkillsProps) => (
  <Styled.Skills {...props}>
    <Headline>{data.headline}</Headline>
    {data.items.map(({ headline, tags }) => (
      <div key={headline}>
        <Subheadline noMargin>{headline}</Subheadline>
        <Styled.List>
          {tags.map((tag, index) => (
            <Styled.ListItem key={tag}>
              {tag}
              {index === tags.length - 1 ? '.' : ', '}
            </Styled.ListItem>
          ))}
        </Styled.List>
      </div>
    ))}
  </Styled.Skills>
);
