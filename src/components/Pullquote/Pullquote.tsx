import * as React from 'react';

import { StyledSystemProps } from '../../typings/StyleSystem';
import { TextLink } from '../TextLink';

import { Styled } from './Pullquote.styles';

type PullquoteProps = {
  author?: string;
  lang?: string;
  source?: string;
  sourceUrl?: string;
};

type StyledPullquoteProps = PullquoteProps & StyledSystemProps;

const Pullquote: React.FC<StyledPullquoteProps> = ({
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

export { Pullquote };
