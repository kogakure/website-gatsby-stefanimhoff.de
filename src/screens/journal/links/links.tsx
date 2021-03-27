import * as React from 'react';

import { useLinkPostsQuery } from '../../../hooks';
import { Emojify } from '../../../layout';
import { Headline } from '../../../components/typography';
import { UnorderedList } from '../../../components/unordered-list';
import { TextLink } from '../../../components/text-link';

import { Styled } from './links.styles';

export const Links = () => {
  const {
    allLinkPosts: { edges },
  } = useLinkPostsQuery();

  return (
    <Styled.Links>
      <Headline data-sal="slide-up" data-sal-duration="800">
        Links
        <Emojify emoji="❤️" />
      </Headline>
      <UnorderedList noMargin>
        {edges.map(({ node: { fields, frontmatter } }) => (
          <li
            key={frontmatter.title}
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <TextLink to={fields.slug}>{frontmatter.title}</TextLink>
          </li>
        ))}
      </UnorderedList>
    </Styled.Links>
  );
};
