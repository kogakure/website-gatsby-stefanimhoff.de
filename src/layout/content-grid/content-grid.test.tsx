import React from 'react';

import { render } from '../../services/test-utils';

import { ContentGrid } from '.';

describe('Grid', () => {
  test('renders correctly', () => {
    const { container } = render(<ContentGrid>ContentGrid</ContentGrid>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "fullsize" renders correctly', () => {
    const { container } = render(
      <ContentGrid size="fullsize">ContentGrid</ContentGrid>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "regular" renders correctly', () => {
    const { container } = render(
      <ContentGrid size="regular">ContentGrid</ContentGrid>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "narrow" renders correctly', () => {
    const { container } = render(
      <ContentGrid size="narrow">ContentGrid</ContentGrid>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "rowGap" renders correctly', () => {
    const { container } = render(<ContentGrid rowGap>ContentGrid</ContentGrid>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
