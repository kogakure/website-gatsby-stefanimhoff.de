import * as React from 'react';

import { CvExperience } from '../../../typings/graphql';
import {
  Headline,
  Subheadline,
  SubSubheadline,
} from '../../../components/typography';
import { UnorderedList } from '../../../components/unordered-list';
import { TextLink } from '../../../components/text-link';

import { Styled } from './experience.styles';

export type ExperienceProps = {
  data: CvExperience;
};

export const Experience = ({ data, ...props }: ExperienceProps) => (
  <Styled.Experience {...props}>
    <Headline>{data.headline}</Headline>
    {data.items.map(({ company, duration, location, tasks, title, url }) => (
      <div key={`${company}-${title}`}>
        <Styled.Title>
          <Subheadline noMargin>{title}</Subheadline>
        </Styled.Title>
        <Styled.Duration>{duration}</Styled.Duration>
        <Styled.HeadlineRow>
          <SubSubheadline noMargin>{company}</SubSubheadline>
          <Styled.Separator>/</Styled.Separator>
          <Styled.Location>{location}</Styled.Location>
        </Styled.HeadlineRow>
        {url && (
          <Styled.Url>
            <TextLink href={url}>{url.replace(/https?:\/\//, '')}</TextLink>
          </Styled.Url>
        )}
        <UnorderedList>
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </UnorderedList>
      </div>
    ))}
  </Styled.Experience>
);
