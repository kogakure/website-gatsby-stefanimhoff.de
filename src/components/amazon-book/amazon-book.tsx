import * as React from 'react';

import { Book, BookProps } from '../book';

const amazonBaseUrl = 'http://www.amazon.de/gp/product';
const affiliateTag = 'stefanimhoffde-21';
const coverSizes = {
  small: 'THUMBZZZ',
  medium: 'TZZZZZZZ',
  default: 'ZTZZZZZZ',
  large: 'LZZZZZZZ',
};

export type AmazonBookSize = 'small' | 'medium' | 'default' | 'large';
export type AmazonBook = {
  asin: string;
  size?: AmazonBookSize;
};

export type AmazonBookProps = Omit<BookProps, 'src' | 'href'> & AmazonBook;

export const AmazonBook: React.FC<AmazonBookProps> = ({
  alt = '',
  asin,
  height,
  size = 'default',
  width,
  ...props
}) => {
  const affiliateUrl = `${amazonBaseUrl}/${asin}?ie=UTF8&tag=${affiliateTag}&linkCode=as2&camp=1638&creative=6742&creativeASIN=${asin}`;
  const amazonImageUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.${coverSizes[size]}.jpg`;

  return (
    <Book
      alt={alt}
      height={height}
      href={affiliateUrl}
      src={amazonImageUrl}
      width={width}
      {...props}
    />
  );
};
