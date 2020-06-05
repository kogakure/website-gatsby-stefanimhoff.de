import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { MainColumn } from '.';

describe('CV', () => {
  describe('MainColumn', () => {
    test('renders correctly', () => {
      const { container } = render(<MainColumn>MainColumn</MainColumn>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<MainColumn>MainColumn</MainColumn>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
