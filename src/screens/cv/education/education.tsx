import * as React from 'react';

import { CvEducation } from '../../../typings/graphql';
import {
  Headline,
  Subheadline,
  SubSubheadline,
} from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './education.styles';

export type EducationProps = {
  data: CvEducation;
};

export const Education: React.FC<EducationProps> = ({ data, ...props }) => (
  <Styled.Education {...props}>
    <Headline>{data.headline}</Headline>
    {data.items.map(({ degree, duration, location, school, url }) => (
      <div key={`${school}-${degree}`}>
        <Styled.Title>
          <Subheadline noMargin>{degree}</Subheadline>
        </Styled.Title>
        <Styled.Duration>{duration}</Styled.Duration>
        <Styled.HeadlineRow>
          <SubSubheadline noMargin>{school}</SubSubheadline>
          <Styled.Dot>•</Styled.Dot>
          <Styled.Location>{location}</Styled.Location>
        </Styled.HeadlineRow>
        {url && (
          <Styled.Url>
            <TextLink href={url}>{url.replace(/https?:\/\//, '')}</TextLink>
          </Styled.Url>
        )}
      </div>
    ))}
  </Styled.Education>
);
