import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Writing } from '.';

describe('Projects', () => {
  describe('Writing', () => {
    test('renders correctly', () => {
      const { container } = render(<Writing />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Writing />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
