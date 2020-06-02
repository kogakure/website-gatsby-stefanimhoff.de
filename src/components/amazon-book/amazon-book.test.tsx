import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Default, Small, Medium, Large } from './amazon-book.stories';

describe('AmazonBook', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('in "small" renders correctly', () => {
    const { container } = render(<Small />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('in "medium" renders correctly', () => {
    const { container } = render(<Medium />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('in "large" renders correctly', () => {
    const { container } = render(<Large />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
