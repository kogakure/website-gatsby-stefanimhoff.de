import * as React from 'react';

import { useMonthlyJournalPostsQuery } from '../../../hooks';
import { Headline } from '../../../components/typography';
import { UnorderedList } from '../../../components/unordered-list';
import { TextLink } from '../../../components/text-link';

import { Styled } from './monthly.styles';

export const Monthly: React.FC = () => {
  const {
    allMonthlyJournalPosts: { edges },
  } = useMonthlyJournalPostsQuery();

  return (
    <Styled.Monthly>
      <Headline>Monthly Recommendations</Headline>
      <UnorderedList noMargin>
        {edges.map(({ node: { fields, frontmatter } }) => (
          <li key={frontmatter.title}>
            <TextLink to={fields.slug}>{frontmatter.title}</TextLink>
          </li>
        ))}
      </UnorderedList>
    </Styled.Monthly>
  );
};
