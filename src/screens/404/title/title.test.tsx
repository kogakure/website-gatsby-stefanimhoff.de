import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Title } from '.';

describe('404', () => {
  describe('Title', () => {
    test('renders correctly', () => {
      const { container } = render(<Title />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Title />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
