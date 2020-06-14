import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Books } from '.';

describe('Traditional Colors of Japan', () => {
  describe('Books', () => {
    test('renders correctly', () => {
      const { container } = render(<Books />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Books />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
