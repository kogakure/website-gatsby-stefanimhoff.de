import * as React from 'react';

import { LocalizedDate } from '../../../components/localized-date';
import { TextLink } from '../../../components/text-link';

import { Styled } from './meta.styles';

export type MetaProps = {
  date: string;
  readingTime: string;
};

export const Meta = ({ date, readingTime }: MetaProps) => (
  <Styled.Meta>
    <Styled.Author>
      <em>By</em> <TextLink to="/about/">Stefan Imhoff</TextLink>
    </Styled.Author>
    <Styled.Date>
      <LocalizedDate date={date} />
    </Styled.Date>
    <Styled.ReadingTime>{readingTime}</Styled.ReadingTime>
  </Styled.Meta>
);
