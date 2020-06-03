import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Book } from '.';

describe('Traditional Colors of Japan', () => {
  describe('Book', () => {
    test('renders correctly', () => {
      const { container } = render(<Book />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Book />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
