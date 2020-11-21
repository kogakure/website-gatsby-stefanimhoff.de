import * as React from 'react';

import { Styled } from './book.styles';

export type BookProps = {
  alt?: string;
  height?: string;
  href?: string;
  src: string;
  width?: string;
};

export const Book = ({
  alt = '',
  height,
  href,
  src,
  width,
  ...props
}: BookProps) => (
  <>
    {href ? (
      <Styled.LinkedBook
        href={href}
        rel="nofollow noopener noreferrer external"
        {...props}
      >
        <Styled.Cover src={src} alt={alt} width={width} height={height} />
      </Styled.LinkedBook>
    ) : (
      <Styled.Book {...props}>
        <Styled.Cover src={src} alt={alt} width={width} height={height} />
      </Styled.Book>
    )}
  </>
);
