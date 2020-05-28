import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { AboutWebsite } from '.';

describe('About', () => {
  describe('SectionAboutWebsite', () => {
    test('renders correctly', () => {
      const { container } = render(<AboutWebsite />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<AboutWebsite />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
