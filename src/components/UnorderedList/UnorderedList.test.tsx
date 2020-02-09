import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { UnorderedList } from '.';

describe('UnorderedList', () => {
  test('renders correctly', () => {
    const { container } = render(<UnorderedList />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<UnorderedList />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
