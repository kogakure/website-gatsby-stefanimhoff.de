import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { HTMLLink, RouterLink } from './text-link.stories';

describe('TextLink', () => {
  describe('with href', () => {
    test('renders correctly', () => {
      const { container } = render(<HTMLLink />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<HTMLLink />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with to property', () => {
    test('renders correctly', () => {
      const { container } = render(<RouterLink />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<RouterLink />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
