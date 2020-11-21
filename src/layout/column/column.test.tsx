import React from 'react';

import { render } from '../../services/test-utils';

import { Column } from '.';

describe('Column', () => {
  test('renders correctly', () => {
    const { container } = render(<Column>Column</Column>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "fullsize" renders correctly', () => {
    const { container } = render(<Column size="fullsize">Column</Column>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "regular" renders correctly', () => {
    const { container } = render(<Column size="regular">Column</Column>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "narrow" renders correctly', () => {
    const { container } = render(<Column size="narrow">Column</Column>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
