import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { SmallPrint } from '.';

describe('Projects', () => {
  describe('SmallPrint', () => {
    test('renders correctly', () => {
      const { container } = render(<SmallPrint>Text</SmallPrint>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<SmallPrint>Text</SmallPrint>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
