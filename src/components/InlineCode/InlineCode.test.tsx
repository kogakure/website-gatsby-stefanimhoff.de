import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { Default } from './InlineCode.stories';

describe('InlineCode', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
