import * as React from 'react';

import { TextLink } from '../TextLink';

import { Styled } from './Blockquote.styles';

interface BlockquoteProps {
  author?: string;
  source?: string;
  sourceUrl?: string;
}

const Blockquote: React.FC<BlockquoteProps> = ({
  author,
  source,
  sourceUrl,
  children,
  ...props
}) => (
  <Styled.Blockquote {...props}>
    {children}
    <footer>
      {(author || source) && '— '}
      {author && <strong>{author}</strong>}
      {author && source && ', '}
      {source &&
        (sourceUrl ? (
          <cite>
            <TextLink href={sourceUrl}>{source}</TextLink>
          </cite>
        ) : (
          <cite>{source}</cite>
        ))}
    </footer>
  </Styled.Blockquote>
);

export { Blockquote };
