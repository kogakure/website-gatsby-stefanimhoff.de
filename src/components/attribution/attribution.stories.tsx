import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Attribution } from '.';
import type { AttributionProps } from '.';

export default {
  title: 'Misc/Attribution',
  component: Attribution,
} as Meta;

const Template: Story<AttributionProps> = (args) => <Attribution {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      title: 'Sunflowers',
      author: 'Stefan Imhoff',
      url: 'https://www.stefanimhoff.de',
    },
  ],
};

export const TitleAuthor = Template.bind({});
TitleAuthor.args = {
  data: [
    {
      title: 'Sunflowers',
      author: 'Stefan Imhoff',
    },
  ],
};

export const MultipleAuthors = Template.bind({});
MultipleAuthors.args = {
  data: [
    {
      title: 'Sunflowers',
      author: 'Stefan Imhoff',
      url: 'https://www.stefanimhoff.de',
    },
    {
      title: 'Boat on a River',
      author: 'Stefan Imhoff',
    },
  ],
};

export const Author = Template.bind({});
Author.args = {
  data: [
    {
      author: 'Stefan Imhoff',
    },
  ],
};

export const AuthorLink = Template.bind({});
AuthorLink.args = {
  data: [
    {
      author: 'Stefan Imhoff',
      url: 'https://www.stefanimhoff.de',
    },
  ],
};
