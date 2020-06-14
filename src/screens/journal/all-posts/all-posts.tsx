import * as React from 'react';

import { useAllJournalPostsQuery } from '../../../hooks';
import { Headline } from '../../../components/typography';
import { UnorderedList } from '../../../components/unordered-list';
import { TextLink } from '../../../components/text-link';

import { Styled } from './all-posts.styles';

export const AllPosts: React.FC = () => {
  const {
    allJournalPosts: { edges },
  } = useAllJournalPostsQuery();

  return (
    <Styled.AllPosts>
      <Headline>All Articles</Headline>
      <UnorderedList noMargin>
        {edges.map(({ node: { fields, frontmatter } }) => (
          <li key={frontmatter.title}>
            <TextLink to={fields.slug}>{frontmatter.title}</TextLink>
          </li>
        ))}
      </UnorderedList>
    </Styled.AllPosts>
  );
};
