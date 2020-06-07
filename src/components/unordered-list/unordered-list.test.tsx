import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Default, NoMargin } from './unordered-list.stories';

describe('UnorderedList', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  test('with "noMargin" renders correctly', () => {
    const { container } = render(<NoMargin />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
