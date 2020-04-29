import React from 'react';

import { Pullquote } from '.';

export default {
  component: Pullquote,
  title: 'Quotations/Pullquote',
};

export const Default = () => <Pullquote>No time for pessimism.</Pullquote>;

export const German = () => (
  <Pullquote lang="de">Keine Zeit für Pessimismus.</Pullquote>
);

export const Japanese = () => <Pullquote lang="ja">悲観の時い</Pullquote>;

export const Author = () => (
  <Pullquote author="Annie Dillard">
    How we spend our days is, of course, how we spend our lives.
  </Pullquote>
);

export const Source = () => (
  <Pullquote source="The Writing Life">
    How we spend our days is, of course, how we spend our lives.
  </Pullquote>
);

export const SourceUrl = () => (
  <Pullquote
    source="The Writing Life"
    sourceUrl="https://www.goodreads.com/book/show/12530.The_Writing_Life"
  >
    How we spend our days is, of course, how we spend our lives.
  </Pullquote>
);

export const AuthorSource = () => (
  <Pullquote author="Annie Dillard" source="The Writing Life">
    How we spend our days is, of course, how we spend our lives.
  </Pullquote>
);

export const AuthorSourceUrl = () => (
  <Pullquote
    author="Annie Dillard"
    source="The Writing Life"
    sourceUrl="https://www.goodreads.com/book/show/12530.The_Writing_Life"
  >
    How we spend our days is, of course, how we spend our lives.
  </Pullquote>
);
