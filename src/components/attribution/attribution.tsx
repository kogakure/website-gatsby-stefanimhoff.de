import * as React from 'react';

import { TextLink } from '../text-link';

import { Styled } from './attribution.styles';

export type AttributionData = {
  author: string;
  title?: string;
  url?: string;
};

export type AttributionProps = {
  data: AttributionData[];
};

export const Attribution = ({ data, ...props }: AttributionProps) => (
  <>
    <Styled.Attribution {...props}>
      {data.map((attribution) => (
        <Styled.ListItem key={`${attribution.author}-${attribution.title}`}>
          {attribution.title && <cite>{attribution.title}. </cite>}
          {attribution.url ? (
            <Styled.Author>
              Photography by{' '}
              <TextLink href={attribution.url}>{attribution.author}</TextLink>
            </Styled.Author>
          ) : (
            <Styled.Author>
              Photography by <b>{attribution.author}</b>
            </Styled.Author>
          )}
        </Styled.ListItem>
      ))}
    </Styled.Attribution>
  </>
);
