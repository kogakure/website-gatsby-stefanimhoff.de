import React from 'react';

import FullsizeTemplate from '../templates/fullsize';
import { Grid, Emojify } from '../layout';
import { Subheadline, Paragraph } from '../components/typography';
import { TextLink } from '../components/text-link';
import { Styled, PortraitPhoto } from '../screens/about';

const AboutPage = () => (
  <FullsizeTemplate>
    <Grid rowGap variant="fullsize">
      <Styled.TitleAbout>About Me</Styled.TitleAbout>
      <Styled.PhotoContainer>
        <PortraitPhoto />
      </Styled.PhotoContainer>
      <Styled.SectionAbout>
        <Paragraph>
          I’m <em>Stefan Imhoff</em>, a Front-End Web Developer and Designer
          from Hamburg, Germany. I love
          <Emojify emoji="🎨" />
          design and art,
          <Emojify emoji="📚" />
          reading books,
          <Emojify emoji="📺" />
          watching movies &amp; TV shows,
          <Emojify emoji="✍️" />
          creating Sketchnotes,
          <Emojify emoji="📸" />
          taking photos, and
          <Emojify emoji="🖋" />
          writing <TextLink to="/haiku/">Haiku</TextLink>. I consider myself as
          a<Emojify emoji="⬜️" />
          <TextLink to="/minimalism/">Minimalist</TextLink>, a{' '}
          <Emojify emoji="🤔" />
          Stoic, an
          <Emojify emoji="🎧" />
          Introvert and
          <Emojify emoji="⛩" />
          Japanophile.
        </Paragraph>
        <Paragraph noMargin>
          Writing is a passion of me: Besides writing{' '}
          <TextLink to="/journal/">articles</TextLink> I wrote a{' '}
          <TextLink href="https://book.kogakure.de/">book</TextLink> about Ninja
          and Ninjutsu – a topic that I know way too much about.
        </Paragraph>
      </Styled.SectionAbout>
      <Styled.SectionAboutWebsite>
        <Subheadline as="h2">About This Website</Subheadline>
        <Paragraph>
          I build this website with{' '}
          <TextLink href="https://reactjs.org/">React</TextLink>, using{' '}
          <TextLink href="https://www.gatsbyjs.org/">Gatsby</TextLink>, a
          blazing fast, static site generator.
        </Paragraph>
        <Paragraph>
          The source code of this website is available on{' '}
          <TextLink href="https://github.com/kogakure/website-gatsby-stefanimhoff.de">
            GitHub
          </TextLink>
          . Feel free to learn from the source code and reuse code for your
          projects. Don’t just steal it. Learn from it. Remix. Reuse. Build your
          own stuff.
        </Paragraph>
        <Paragraph noMargin>
          The website is hosted on{' '}
          <TextLink href="https://www.netlify.com/">Netlify</TextLink>.
        </Paragraph>
      </Styled.SectionAboutWebsite>
    </Grid>
  </FullsizeTemplate>
);

export default AboutPage;
