import React from 'react';

import { AmazonBook } from '.';

export default {
  component: AmazonBook,
  title: 'Misc/AmazonBook',
};

const props = {
  asin: '0812968255',
};

export const Default = () => (
  <AmazonBook {...props} alt="Meditations by Marcus Aurelius" />
);

export const Small = () => <AmazonBook {...props} size="small" />;

export const Medium = () => <AmazonBook {...props} size="medium" />;

export const Large = () => <AmazonBook {...props} size="large" />;
