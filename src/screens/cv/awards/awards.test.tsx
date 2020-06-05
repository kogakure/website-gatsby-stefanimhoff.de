import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Awards } from '.';

const data = {
  headline: 'Awards',
  items: ['Award 1', 'Award 2', 'Award 3'],
};

describe('CV', () => {
  describe('Awards', () => {
    test('renders correctly', () => {
      const { container } = render(<Awards data={data} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Awards data={data} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
