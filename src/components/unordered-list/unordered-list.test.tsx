import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { UnorderedList } from '.';

describe('UnorderedList', () => {
  test('renders correctly', () => {
    const { container } = render(
      <UnorderedList>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </UnorderedList>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(
      <UnorderedList>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </UnorderedList>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
