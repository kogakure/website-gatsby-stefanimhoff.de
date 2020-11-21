import * as React from 'react';

import { CvLanguages } from '../../../typings/graphql';
import { Headline } from '../../../components/typography';
import { UnorderedList } from '../../../components/unordered-list';

import { Styled } from './languages.styles';

export type LanguagesProps = {
  data: CvLanguages;
};

export const Languages = ({ data, ...props }: LanguagesProps) => (
  <Styled.Languages {...props}>
    <Headline>{data.headline}</Headline>
    <UnorderedList>
      {data.items.map(({ language, level }) => (
        <li key={language}>
          <strong>{language}</strong> ({level})
        </li>
      ))}
    </UnorderedList>
  </Styled.Languages>
);
