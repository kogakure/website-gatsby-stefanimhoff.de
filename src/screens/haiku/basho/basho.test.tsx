import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Basho } from '.';

describe('Haiku', () => {
  describe('Basho', () => {
    test('renders correctly', () => {
      const { container } = render(<Basho />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Basho />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
