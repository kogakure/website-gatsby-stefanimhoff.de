import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Verse } from '.';

describe('Verse', () => {
  test('renders correctly', () => {
    const { container } = render(<Verse>Verse</Verse>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "center" renders correctly', () => {
    const { container } = render(<Verse variant="center">Verse</Verse>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "left" renders correctly', () => {
    const { container } = render(<Verse variant="left">Verse</Verse>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Verse>Verse</Verse>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
