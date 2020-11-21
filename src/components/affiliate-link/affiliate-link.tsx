import * as React from 'react';

import { TextLink } from '../text-link';

export type AffiliateLinkProps = {
  children: React.ReactNode;
  asin: string;
};

export const AffiliateLink = ({
  asin,
  children,
  ...props
}: AffiliateLinkProps) => {
  const affiliateLink = `http://www.amazon.de/gp/product/${asin}?ie=UTF8&tag=stefanimhoffde-21&linkCode=as2&camp=1638&creative=6742&creativeASIN=${asin}`;

  return (
    <TextLink href={affiliateLink} {...props}>
      {children}
    </TextLink>
  );
};
