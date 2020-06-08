import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { HaikuGrid } from '.';

describe('Haiku', () => {
  describe('Books', () => {
    test('renders correctly', () => {
      const { container } = render(<HaikuGrid>HaikuGrid</HaikuGrid>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<HaikuGrid>HaikuGrid</HaikuGrid>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
