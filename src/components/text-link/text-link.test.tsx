import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import {
  HTMLLink,
  RouterLink,
  BlockLinkHTMLLink,
  BlockLinkRouterLink,
} from './text-link.stories';

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

describe('BlockLink', () => {
  describe('with href', () => {
    test('renders correctly', () => {
      const { container } = render(<BlockLinkHTMLLink />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<BlockLinkHTMLLink />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('with to property', () => {
    test('renders correctly', () => {
      const { container } = render(<BlockLinkRouterLink />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<BlockLinkRouterLink />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
