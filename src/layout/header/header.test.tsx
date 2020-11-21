import React from 'react';
import { axe } from 'jest-axe';

import { navigation } from '../navigation/mock-data';
import { render } from '../../services/test-utils';

import { Header } from '.';

describe('Header', () => {
  test('renders correctly', () => {
    const { container } = render(<Header navigation={navigation} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Header navigation={navigation} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
