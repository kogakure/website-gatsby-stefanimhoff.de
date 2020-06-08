import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { HaikuCell } from '.';

describe('Haiku', () => {
  describe('HaikuCell', () => {
    test('renders correctly', () => {
      const { container } = render(<HaikuCell>HaikuCell</HaikuCell>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "dark" renders correctly', () => {
      const { container } = render(<HaikuCell dark>HaikuCell</HaikuCell>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<HaikuCell>HaikuCell</HaikuCell>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
