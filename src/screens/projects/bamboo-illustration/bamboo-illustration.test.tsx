import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { BambooIllustration } from '.';

describe('Projects', () => {
  describe('BambooIllustration', () => {
    test('renders correctly', () => {
      const { container } = render(<BambooIllustration />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<BambooIllustration />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
