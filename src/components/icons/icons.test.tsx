import React from 'react';

import { render } from '../../services/test-utils';

import { Icon as ArrowUp } from './arrow-up.stories';
import { Icon as ArrowLeft } from './arrow-left.stories';
import { Icon as Circle } from './circle.stories';
import { Icon as Information } from './information.stories';

describe('Icon', () => {
  test('ArrowUp renders correctly', () => {
    const { container } = render(<ArrowUp />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('ArrowLeft renders correctly', () => {
    const { container } = render(<ArrowLeft />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Circle renders correctly', () => {
    const { container } = render(<Circle />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Information renders correctly', () => {
    const { container } = render(<Information />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
