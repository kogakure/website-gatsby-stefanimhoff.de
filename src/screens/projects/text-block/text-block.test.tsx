import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { TextBlock } from '.';

describe('Projects', () => {
  describe('TextBlock', () => {
    test('renders correctly', () => {
      const { container } = render(<TextBlock>Text</TextBlock>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<TextBlock>Text</TextBlock>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
