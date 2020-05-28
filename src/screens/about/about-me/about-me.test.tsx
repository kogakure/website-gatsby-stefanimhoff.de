import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { AboutMe } from '.';

describe('About', () => {
  describe('AboutMe', () => {
    test('renders correctly', () => {
      const { container } = render(<AboutMe />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<AboutMe />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
