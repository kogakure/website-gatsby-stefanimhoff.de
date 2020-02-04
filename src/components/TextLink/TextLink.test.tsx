import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { TextLink } from '.';

describe('TextLink', () => {
  describe('with href', () => {
    test('renders correctly', () => {
      const { container } = render(
        <TextLink href="https://www.stefanimhoff.de/">Link</TextLink>
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(
        <TextLink href="https://www.stefanimhoff.de/">Link</TextLink>
      );
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with to property', () => {
    test('renders correctly', () => {
      const { container } = render(<TextLink to="/styleguide">Link</TextLink>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<TextLink to="/styleguide">Link</TextLink>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
