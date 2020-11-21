import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { RubyAnnotation } from '.';

describe('RubyAnnotation', () => {
  test('renders correctly', () => {
    const { container } = render(<RubyAnnotation base="本" text="ほん" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<RubyAnnotation base="本" text="ほん" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
