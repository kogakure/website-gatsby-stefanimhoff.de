import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Languages } from '.';

const data = {
  headline: 'Languages',
  items: [
    {
      language: 'German',
      level: 'native language',
    },
  ],
};

describe('CV', () => {
  describe('Languages', () => {
    test('renders correctly', () => {
      const { container } = render(<Languages data={data} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Languages data={data} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
