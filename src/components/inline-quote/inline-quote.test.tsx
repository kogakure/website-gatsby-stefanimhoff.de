import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import {
  Default,
  GermanNested,
  JapaneseNested,
  Nested,
} from './inline-quote.stories';

describe('InlineQuote', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('nested', () => {
    test('renders correctly', () => {
      const { container } = render(<Nested />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Nested />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
    describe('in German', () => {
      test('renders correctly', () => {
        const { container } = render(<GermanNested />);

        expect(container.firstChild).toMatchSnapshot();
      });

      test('is accessible', async () => {
        const { container } = render(<GermanNested />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
      });
    });

    describe('in Japanese', () => {
      test('renders correctly', () => {
        const { container } = render(<JapaneseNested />);

        expect(container.firstChild).toMatchSnapshot();
      });

      test('is accessible', async () => {
        const { container } = render(<JapaneseNested />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
      });
    });
  });
});
