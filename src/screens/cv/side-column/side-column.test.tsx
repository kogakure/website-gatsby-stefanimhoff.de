import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { SideColumn } from '.';

describe('CV', () => {
  describe('SideColumn', () => {
    test('renders correctly', () => {
      const { container } = render(<SideColumn>SideColumn</SideColumn>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<SideColumn>SideColumn</SideColumn>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
