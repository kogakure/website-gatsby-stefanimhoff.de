import * as React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { Blockquote } from '.';
import type { BlockquoteProps } from '.';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export default {
  title: 'Quotations/Blockquote',
  component: Blockquote,
} as Meta;

const Template: Story<BlockquoteProps> = (args) => <Blockquote {...args} />;

const TemplateWithContainer: Story<BlockquoteProps> = (args) => (
  <Container>
    <Blockquote {...args} />
  </Container>
);

const TemplateWithContainerAndParagraphs: Story<BlockquoteProps> = (args) => (
  <Container>
    <Paragraph>
      Lorem ipsum dolor amet shoreditch tbh butcher 90's portland, keytar street
      art. Pork belly you probably haven't heard of them ethical post-ironic
      hella, cray kale chips fashion axe chillwave shabby chic man bun slow-carb
      unicorn.
    </Paragraph>
    <Blockquote {...args} />
    <Paragraph>
      Raclette butcher gastropub, pok pok squid freegan kitsch lyft lumbersexual
      quinoa seitan vaporware hammock organic. Woke synth bitters chia lyft vice
      forage blog hell of. Semiotics mlkshk next level brooklyn heirloom
      flannel.
    </Paragraph>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <Paragraph>
      Flying is learning how to throw yourself at the ground and miss.
    </Paragraph>
  ),
};

export const German = Template.bind({});
German.args = {
  lang: 'de',
  children: <Paragraph>Keine Zeit für Pessimismus.</Paragraph>,
};

export const Japanese = Template.bind({});
Japanese.args = {
  lang: 'ja',
  children: <Paragraph>悲観の時間がない。</Paragraph>,
};

export const Author = Template.bind({});
Author.args = {
  author: 'Douglas Adams',
  children: (
    <Paragraph>
      Flying is learning how to throw yourself at the ground and miss.
    </Paragraph>
  ),
};

export const AuthorSource = Template.bind({});
AuthorSource.args = {
  author: 'Douglas Adams',
  source: 'The Hichhikers Guide to the Galaxy',
  children: (
    <Paragraph>
      Flying is learning how to throw yourself at the ground and miss.
    </Paragraph>
  ),
};

export const Source = Template.bind({});
Source.args = {
  source: 'The Hichhikers Guide to the Galaxy',
  children: (
    <Paragraph>
      Flying is learning how to throw yourself at the ground and miss.
    </Paragraph>
  ),
};

export const SourceUrl = Template.bind({});
SourceUrl.args = {
  source: 'Speech to the House of Commons',
  sourceUrl:
    'https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill',
  children: (
    <Paragraph>
      Many forms of Government have been tried, and will be tried in this world
      of sin and woe. No one pretends that democracy is perfect or all-wise.
      Indeed, it has been said that democracy is the worst form of government
      except all those other forms that have been tried from time to time.
    </Paragraph>
  ),
};

export const AuthorSourceUrl = Template.bind({});
AuthorSourceUrl.args = {
  author: 'Winston Churchill',
  source: 'Speech to the House of Commons',
  sourceUrl:
    'https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill',
  children: (
    <Paragraph>
      Many forms of Government have been tried, and will be tried in this world
      of sin and woe. No one pretends that democracy is perfect or all-wise.
      Indeed, it has been said that democracy is the worst form of government
      except all those other forms that have been tried from time to time.
    </Paragraph>
  ),
};

export const MultipleParagraphs = TemplateWithContainer.bind({});
MultipleParagraphs.args = {
  author: 'Marcus Aurelius',
  source: 'Meditations, 2.1',
  children: (
    <>
      <Paragraph>When you first rise in the morning tell yourself:</Paragraph>
      <Paragraph>
        I will encounter busybodies, ingrates, egomaniacs, liars, the jealous
        and cranks. They are all stricken with these afflictions because they
        don’t know the difference between good and evil.
      </Paragraph>
      <Paragraph>
        Because I have understood the beauty of good and the ugliness of evil, I
        know that these wrong-doers are still akin to me … and that none can do
        me harm, or implicate me in ugliness—nor can I be angry at my relatives
        or hate them. For we are made for cooperation.
      </Paragraph>
    </>
  ),
};

export const BetweenParagraphs = TemplateWithContainerAndParagraphs.bind({});
BetweenParagraphs.args = {
  author: 'Marcus Aurelius',
  source: 'Meditations, 2.1',
  children: (
    <>
      <Paragraph>When you first rise in the morning tell yourself:</Paragraph>
      <Paragraph>
        I will encounter busybodies, ingrates, egomaniacs, liars, the jealous
        and cranks. They are all stricken with these afflictions because they
        don’t know the difference between good and evil.
      </Paragraph>
      <Paragraph>
        Because I have understood the beauty of good and the ugliness of evil, I
        know that these wrong-doers are still akin to me … and that none can do
        me harm, or implicate me in ugliness—nor can I be angry at my relatives
        or hate them. For we are made for cooperation.
      </Paragraph>
    </>
  ),
};
