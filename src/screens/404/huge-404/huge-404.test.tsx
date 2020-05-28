import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Huge404 } from '.';

describe('404', () => {
  describe('Huge404', () => {
    test('renders correctly', () => {
      const { container } = render(<Huge404 />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Huge404 />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
