import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { InlineCode } from '.';

describe('InlineCode', () => {
  test('renders correctly', () => {
    const { container } = render(<InlineCode>Code</InlineCode>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<InlineCode>Code</InlineCode>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
