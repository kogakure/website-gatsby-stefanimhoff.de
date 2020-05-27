import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Default, Center, Left } from './verse.stories';

describe('Verse', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "center" renders correctly', () => {
    const { container } = render(<Center />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "left" renders correctly', () => {
    const { container } = render(<Left />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
