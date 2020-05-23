import * as React from 'react';

import { TextLink } from '../text-link';

import { Styled } from './pullquote.styles';

export type PullquoteProps = {
  author?: string;
  lang?: string;
  source?: string;
  sourceUrl?: string;
};

export const Pullquote: React.FC<PullquoteProps> = ({
  author,
  children,
  lang = 'en',
  source,
  sourceUrl,
  ...props
}) => (
  <Styled.Pullquote lang={lang} {...props}>
    <p>{children}</p>
    <Styled.Footer>
      {author && <Styled.Author>{author}</Styled.Author>}
      {author && source && ', '}
      {source &&
        (sourceUrl ? (
          <Styled.Source>
            <TextLink href={sourceUrl}>{source}</TextLink>
          </Styled.Source>
        ) : (
          <Styled.Source>{source}</Styled.Source>
        ))}
    </Styled.Footer>
  </Styled.Pullquote>
);
