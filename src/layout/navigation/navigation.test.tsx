import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { navigation } from './mock-data';

import { Navigation } from '.';

describe('Navigation', () => {
  test('renders correctly', () => {
    const { container } = render(<Navigation navigation={navigation} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Navigation navigation={navigation} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
