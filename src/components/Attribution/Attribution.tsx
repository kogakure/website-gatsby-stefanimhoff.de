import * as React from 'react';

import { generateKey } from '../../utils/generate-key';
import { TextLink } from '../TextLink';
import { HorizontalRule } from '../HorizontalRule';

import { Styled } from './Attribution.styles';

export interface AttributionData {
  author: string;
  title?: string;
  url?: string;
}

interface AttributionProps {
  data: AttributionData[];
}

const Attribution: React.FC<AttributionProps> = ({ data, ...props }) => (
  <>
    <HorizontalRule />
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

export { Attribution };
