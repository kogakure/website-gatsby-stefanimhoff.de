import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Pullquote } from '.';
import type { PullquoteProps } from '.';

export default {
  title: 'Quotations/Pullquote',
  component: Pullquote,
} as Meta;

const Template: Story<PullquoteProps> = (args) => <Pullquote {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'No time for pessimism.',
};

export const German = Template.bind({});
German.args = {
  children: 'Keine Zeit für Pessimismus.',
  lang: 'de',
};

export const Japanese = Template.bind({});
Japanese.args = {
  children: '悲観の時い',
  lang: 'ja',
};

export const Author = Template.bind({});
Author.args = {
  children: 'How we spend our days is, of course, how we spend our lives.',
  author: 'Annie Dillard',
};

export const Source = Template.bind({});
Source.args = {
  children: 'How we spend our days is, of course, how we spend our lives.',
  source: 'The Writing Life',
};

export const SourceUrl = Template.bind({});
SourceUrl.args = {
  children: 'How we spend our days is, of course, how we spend our lives.',
  source: 'The Writing Life',
  sourceUrl: 'https://www.goodreads.com/book/show/12530.The_Writing_Life',
};

export const AuthorSource = Template.bind({});
AuthorSource.args = {
  author: 'Annie Dillard',
  children: 'How we spend our days is, of course, how we spend our lives.',
  source: 'The Writing Life',
};

export const AuthorSourceUrl = Template.bind({});
AuthorSourceUrl.args = {
  author: 'Annie Dillard',
  children: 'How we spend our days is, of course, how we spend our lives.',
  source: 'The Writing Life',
  sourceUrl: 'https://www.goodreads.com/book/show/12530.The_Writing_Life',
};
