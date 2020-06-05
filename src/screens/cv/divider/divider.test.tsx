import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Divider } from '.';

describe('CV', () => {
  describe('Divider', () => {
    test('renders correctly', () => {
      const { container } = render(<Divider />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Divider />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
