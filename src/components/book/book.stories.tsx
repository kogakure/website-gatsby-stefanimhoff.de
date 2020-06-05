import React from 'react';

import book from './mock/book.jpg';

import { Book } from '.';

export default {
  component: Book,
  title: 'Misc/Book',
};

export const Default = () => <Book height="393" src={book} width="300" />;

export const LinkedBook = () => (
  <Book
    alt="kogakure"
    height="393"
    href="https://book.kogakure.de/"
    src={book}
    width="300"
  />
);
