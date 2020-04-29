import * as React from 'react';

import { StyledSystemProps } from '../../typings/StyleSystem';
import { TextLink } from '../TextLink';

import { Styled } from './Blockquote.styles';

type BlockquoteProps = {
  author?: string;
  lang?: string;
  source?: string;
  sourceUrl?: string;
};

type StyledBlockquoteProps = BlockquoteProps & StyledSystemProps;

const Blockquote: React.FC<StyledBlockquoteProps> = ({
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

Blockquote.defaultProps = {
  mx: 0,
  my: 12,
};

export { Blockquote };
