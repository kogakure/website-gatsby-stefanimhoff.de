import React from 'react';

import { Typography } from '../Typography';

import { Blockquote } from '.';

const { Paragraph } = Typography;

export default {
  component: Blockquote,
  title: 'Quotations/Blockquote',
};

export const Default = () => (
  <Blockquote>
    <p>Flying is learning how to throw yourself at the ground and miss.</p>
  </Blockquote>
);

export const German = () => (
  <Blockquote lang="de">
    <p>Keine Zeit für Pessimismus.</p>
  </Blockquote>
);

export const Japanese = () => (
  <Blockquote lang="ja">
    <p>悲観の時間がない。</p>
  </Blockquote>
);

export const MultipleParagraphs = () => (
  <Blockquote author="Marcus Aurelius" source="Meditations, 2.1">
    <p>When you first rise in the morning tell yourself:</p>
    <p>
      I will encounter busybodies, ingrates, egomaniacs, liars, the jealous and
      cranks. They are all stricken with these afflictions because they don’t
      know the difference between good and evil.
    </p>
    <p>
      Because I have understood the beauty of good and the ugliness of evil, I
      know that these wrong-doers are still akin to me … and that none can do me
      harm, or implicate me in ugliness—nor can I be angry at my relatives or
      hate them. For we are made for cooperation.
    </p>
  </Blockquote>
);

export const MultipleParagraphsBetweenParagraphs = () => (
  <>
    <Paragraph>
      Lorem ipsum dolor amet shoreditch tbh butcher 90's portland, keytar street
      art. Pork belly you probably haven't heard of them ethical post-ironic
      hella, cray kale chips fashion axe chillwave shabby chic man bun slow-carb
      unicorn. Live-edge intelligentsia tumblr quinoa man braid. Hexagon disrupt
      echo park brunch direct trade four dollar toast chartreuse, drinking
      vinegar wolf bushwick pork belly. Vexillologist sartorial literally venmo
      blog. Tumblr you probably haven't heard of them bitters swag waistcoat af.
      Deep v helvetica blog, paleo cardigan seitan kombucha normcore.
    </Paragraph>

    <Blockquote author="Marcus Aurelius" source="Meditations, 2.1">
      <p>When you first rise in the morning tell yourself:</p>
      <p>
        I will encounter busybodies, ingrates, egomaniacs, liars, the jealous
        and cranks. They are all stricken with these afflictions because they
        don’t know the difference between good and evil.
      </p>
      <p>
        Because I have understood the beauty of good and the ugliness of evil, I
        know that these wrong-doers are still akin to me … and that none can do
        me harm, or implicate me in ugliness—nor can I be angry at my relatives
        or hate them. For we are made for cooperation.
      </p>
    </Blockquote>
    <Paragraph>
      Raclette butcher gastropub, pok pok squid freegan kitsch lyft lumbersexual
      quinoa seitan vaporware hammock organic. Woke synth bitters chia lyft vice
      forage blog hell of. Semiotics mlkshk next level brooklyn heirloom
      flannel. Jean shorts fam tumblr, direct trade franzen +1 flexitarian.
      Umami XOXO whatever lyft slow-carb kickstarter, health goth listicle
      glossier microdosing affogato meggings tote bag wolf williamsburg.
    </Paragraph>
  </>
);

export const Author = () => (
  <Blockquote author="Douglas Adams">
    <p>Flying is learning how to throw yourself at the ground and miss.</p>
  </Blockquote>
);

export const Source = () => (
  <Blockquote source="The Hichhikers Guide to the Galaxy">
    <p>Flying is learning how to throw yourself at the ground and miss.</p>
  </Blockquote>
);

export const SourceUrl = () => (
  <Blockquote
    source="Speech to the House of Commons"
    sourceUrl="https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill"
  >
    <p>
      Many forms of Government have been tried, and will be tried in this world
      of sin and woe. No one pretends that democracy is perfect or all-wise.
      Indeed, it has been said that democracy is the worst form of government
      except all those other forms that have been tried from time to time.
    </p>
  </Blockquote>
);

export const AuthorSourceUrl = () => (
  <Blockquote
    author="Winston Churchill"
    source="Speech to the House of Commons"
    sourceUrl="https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill"
  >
    <p>
      Many forms of Government have been tried, and will be tried in this world
      of sin and woe. No one pretends that democracy is perfect or all-wise.
      Indeed, it has been said that democracy is the worst form of government
      except all those other forms that have been tried from time to time.
    </p>
  </Blockquote>
);

export const AuthorSource = () => (
  <Blockquote
    author="Douglas Adams"
    source="The Hichhikers Guide to the Galaxy"
  >
    <p>Flying is learning how to throw yourself at the ground and miss.</p>
  </Blockquote>
);
