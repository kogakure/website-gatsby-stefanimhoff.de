import React from 'react';

import { render } from '../../services/test-utils';

import { Default, Fullsize, Regular, Narrow } from './column.stories';

describe('Column', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "fullsize" renders correctly', () => {
    const { container } = render(<Fullsize />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "regular" renders correctly', () => {
    const { container } = render(<Regular />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "narrow" renders correctly', () => {
    const { container } = render(<Narrow />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
