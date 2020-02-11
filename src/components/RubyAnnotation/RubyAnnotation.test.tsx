import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { RubyAnnotation } from '.';

describe('RubyAnnotation', () => {
  test('renders correctly', () => {
    const { container } = render(<RubyAnnotation base="日" text="に" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<RubyAnnotation base="日" text="に" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
