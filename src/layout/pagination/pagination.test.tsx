import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Default, Both, Left, Right } from './pagination.stories';

describe('Pagination', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('"Both" renders correctly', () => {
    const { container } = render(<Both />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('"Left" renders correctly', () => {
    const { container } = render(<Left />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('"Right" renders correctly', () => {
    const { container } = render(<Right />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Both />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
