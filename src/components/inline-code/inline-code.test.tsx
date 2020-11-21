import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { InlineCode } from '.';

describe('InlineCode', () => {
  test('renders correctly', () => {
    const { container } = render(<InlineCode>InlineCode</InlineCode>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<InlineCode>InlineCode</InlineCode>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
