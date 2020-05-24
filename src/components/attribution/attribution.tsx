import * as React from 'react';

import { generateKey } from '../../services/generate-key';
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

export const Attribution: React.FC<AttributionProps> = ({ data, ...props }) => (
  <>
    <Styled.Attribution {...props}>
      {data.map((attribution) => (
        <li key={generateKey(attribution.author)}>
          {attribution.title && <cite>{attribution.title}. </cite>}
          {attribution.url ? (
            <>
              Photography by{' '}
              <TextLink href={attribution.url}>{attribution.author}</TextLink>
            </>
          ) : (
            <>
              Photography by <b>{attribution.author}</b>
            </>
          )}
        </li>
      ))}
    </Styled.Attribution>
  </>
);
