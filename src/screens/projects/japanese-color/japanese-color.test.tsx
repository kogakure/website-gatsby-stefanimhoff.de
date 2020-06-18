import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { JapaneseColor } from '.';

describe('Projects', () => {
  describe('JapaneseColor', () => {
    test('renders correctly', () => {
      const { container } = render(<JapaneseColor />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<JapaneseColor />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
