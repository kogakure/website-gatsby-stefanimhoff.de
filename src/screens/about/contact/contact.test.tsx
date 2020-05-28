import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Contact } from '.';

describe('About', () => {
  describe('Contact', () => {
    test('renders correctly', () => {
      const { container } = render(<Contact />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Contact />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
