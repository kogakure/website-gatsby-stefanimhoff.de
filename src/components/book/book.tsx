import * as React from 'react';

import { Styled } from './book.styles';

export type BookProps = {
  alt?: string;
  height?: string;
  href?: string;
  src: string;
  width?: string;
};

export const Book: React.FC<BookProps> = ({
  alt = '',
  height,
  href,
  src,
  width,
  ...props
}) => (
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
