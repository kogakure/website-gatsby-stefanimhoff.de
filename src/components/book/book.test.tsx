import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Default, LinkedBook } from './book.stories';

describe('Book', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('with "href"', () => {
    test('renders correctly', () => {
      const { container } = render(<LinkedBook />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<LinkedBook />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
