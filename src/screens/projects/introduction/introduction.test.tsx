import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Introduction } from '.';

describe('Projects', () => {
  describe('Introduction', () => {
    test('renders correctly', () => {
      const { container } = render(<Introduction />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Introduction />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
