import React from 'react';

import { Attribution } from '.';

export default {
  component: Attribution,
  title: 'Misc/Attribution',
};

export const Default = () => (
  <Attribution
    data={[
      {
        title: 'Sunflowers',
        author: 'Stefan Imhoff',
        url: 'https://www.stefanimhoff.de',
      },
    ]}
  />
);

export const TitleAuthor = () => (
  <Attribution
    data={[
      {
        title: 'Sunflowers',
        author: 'Stefan Imhoff',
      },
    ]}
  />
);

export const Multiple = () => (
  <Attribution
    data={[
      {
        title: 'Sunflowers',
        author: 'Stefan Imhoff',
        url: 'https://www.stefanimhoff.de',
      },
      {
        title: 'Boat on a River',
        author: 'Stefan Imhoff',
      },
    ]}
  />
);

export const Author = () => (
  <Attribution
    data={[
      {
        author: 'Stefan Imhoff',
      },
    ]}
  />
);

export const AuthorLink = () => (
  <Attribution
    data={[
      {
        author: 'Stefan Imhoff',
        url: 'https://www.stefanimhoff.de',
      },
    ]}
  />
);
