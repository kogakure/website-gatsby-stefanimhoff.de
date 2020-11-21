/* eslint-disable @typescript-eslint/indent */
import * as React from 'react';

import { getRandomNumber } from '../../../services/random-number';
import { useHomepageJournalPostsQuery } from '../../../hooks';
import { Emojify } from '../../../layout';
import {
  Headline,
  SubSubheadline,
  Paragraph,
} from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { TextLink } from '../../../components/text-link';

import { Styled } from './journal.styles';

export const Journal = ({ ...props }) => {
  const {
    homepageJournalPosts: { edges },
  } = useHomepageJournalPostsQuery();

  return (
    <Styled.Journal {...props}>
      <div data-sal="slide-up" data-sal-duration="800">
        <Headline>
          Latest Articles
          <Emojify emoji="🖋" />
        </Headline>
        <Styled.Introduction>
          <Styled.Text>
            <Paragraph>
              I am writing about code, design, productivity, self-improvement,
              films, and books in this Journal and publish a monthly article
              with recommendations.
            </Paragraph>
            <MoreLink to="/journal/">Read all articles</MoreLink>
          </Styled.Text>
          <Styled.Subscribe>
            <SubSubheadline as="h3">Subscribe</SubSubheadline>
            <Paragraph noMargin>
              Stay up to date. Subscribe to my{' '}
              <TextLink href="https://www.stefanimhoff.de/index.xml">
                RSS feed
              </TextLink>
              , and follow me on{' '}
              <TextLink href="https://twitter.com/kogakure">Twitter</TextLink>.
            </Paragraph>
          </Styled.Subscribe>
        </Styled.Introduction>
      </div>
      <Styled.Grid>
        {edges.map(({ node }) => {
          const {
            excerpt,
            fields: { slug },
            frontmatter: { title, date, cover },
          } = node;

          return (
            <Styled.Post
              bottomSpace={getRandomNumber(7)}
              key={slug}
              topSpace={getRandomNumber(10)}
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <Styled.LinkedPost to={slug} aria-label={title}>
                {cover &&
                  cover.childImageSharp &&
                  cover.childImageSharp.fluid && (
                    <Styled.Image fluid={cover.childImageSharp.fluid} />
                  )}
                <header>
                  <Styled.Date date={date} />
                  <SubSubheadline as="h3">{title}</SubSubheadline>
                  {!cover && <>{excerpt}</>}
                </header>
              </Styled.LinkedPost>
            </Styled.Post>
          );
        })}
      </Styled.Grid>
    </Styled.Journal>
  );
};
