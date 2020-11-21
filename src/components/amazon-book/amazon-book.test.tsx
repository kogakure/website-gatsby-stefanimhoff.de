import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { AmazonBook } from '.';
import type { AmazonBookProps } from '.';

type AmazonBookTestProps = AmazonBookProps & {
  description: string;
};

const defaultProps = {
  alt: 'Meditations by Marcus Aurelius',
  asin: '0812968255',
};

describe('AmazonBook', () => {
  const combinations: AmazonBookTestProps[] = [
    { description: 'default', ...defaultProps },
    { description: 'small', ...defaultProps, size: 'small' },
    { description: 'medium', ...defaultProps, size: 'medium' },
    { description: 'large', ...defaultProps, size: 'large' },
  ];

  combinations.forEach((combination) => {
    test(`renders in ${combination.description}`, () => {
      const { container } = render(<AmazonBook {...combination} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  combinations.forEach((combination) => {
    test(`is accessible in ${combination.description}`, async () => {
      const { container } = render(<AmazonBook {...combination} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
