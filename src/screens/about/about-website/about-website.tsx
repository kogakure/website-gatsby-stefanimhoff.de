import * as React from 'react';

import { Emojify } from '../../../layout';
import { Paragraph, Subheadline } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './about-website.styles';

export const AboutWebsite = () => (
  <Styled.AboutWebsite data-sal="slide-up" data-sal-duration="800">
    <Subheadline as="h2">
      About This Website
      <Emojify emoji="🌐" />
    </Subheadline>
    <Paragraph>
      I build this website with{' '}
      <TextLink href="https://reactjs.org/">React</TextLink>, using{' '}
      <TextLink href="https://www.gatsbyjs.org/">Gatsby</TextLink>, a blazingly
      fast, static site generator.
    </Paragraph>
    <Paragraph>
      The source code of this website is available on{' '}
      <TextLink href="https://github.com/kogakure/website-gatsby-stefanimhoff.de">
        GitHub
      </TextLink>
      . Feel free to learn from the source code and reuse code for your
      projects. Don’t just steal it. Learn from it. Remix. Reuse. Build your own
      stuff.
    </Paragraph>
    <Paragraph noMargin>
      The website is hosted on{' '}
      <TextLink href="https://www.netlify.com/">Netlify</TextLink>.
    </Paragraph>
  </Styled.AboutWebsite>
);
