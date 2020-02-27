import React from 'react';

import { Blockquote } from '.';

export default {
  component: Blockquote,
  title: 'Blockquote',
};

export const Default = () => (
  <Blockquote>
    <p>Flying is learning how to throw yourself at the ground and miss.</p>
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
      know that these wrong-doers are still akin to me … and that none can to me
      harm, or implicate me in ugliness—nor can I be angry at my relatives or
      hate them. For we are made for cooperation.
    </p>
  </Blockquote>
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
