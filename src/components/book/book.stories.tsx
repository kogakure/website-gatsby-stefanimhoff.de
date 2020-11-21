import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import book from './mock/book.jpg';

import { Book } from '.';
import type { BookProps } from '.';

export default {
  title: 'Misc/Book',
  component: Book,
} as Meta;

const Template: Story<BookProps> = (args) => <Book {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: '393',
  src: book,
  width: '300',
};

export const LinkedBook = Template.bind({});
LinkedBook.args = {
  alt: 'kogakure',
  height: '393',
  href: 'https://book.kogakure.de/',
  src: book,
  width: '300',
};
