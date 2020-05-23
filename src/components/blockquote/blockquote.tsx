import * as React from 'react';

import { TextLink } from '../text-link';

import { Styled } from './blockquote.styles';

export type BlockquoteProps = {
  author?: string;
  lang?: string;
  source?: string;
  sourceUrl?: string;
};

export const Blockquote: React.FC<BlockquoteProps> = ({
  author,
  children,
  lang = 'en',
  source,
  sourceUrl,
  ...props
}) => (
  <Styled.Blockquote lang={lang} {...props}>
    {children}
    <Styled.Footer>
      {(author || source) && '—'}
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
  </Styled.Blockquote>
);
