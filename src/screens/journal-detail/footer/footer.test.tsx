import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Footer } from '.';

const data = {
  attribution: [
    {
      title: 'Sunflowers',
      author: 'Stefan Imhoff',
      url: 'https://www.stefanimhoff.de',
    },
  ],
};

describe('Journal Detail', () => {
  describe('Footer', () => {
    test('renders correctly', () => {
      const { container } = render(<Footer {...data} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Footer {...data} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
