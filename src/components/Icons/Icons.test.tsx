import React from 'react';

import { render } from '../../utils/test-utils';

import { Icon as ArrowUp } from './ArrowUp.stories';
import { Icon as Information } from './Information.stories';
import { Icon as Moon } from './Moon.stories';
import { Icon as Sun } from './Sun.stories';

describe('Icon', () => {
  test('ArrowUp renders correctly', () => {
    const { container } = render(<ArrowUp />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Information renders correctly', () => {
    const { container } = render(<Information />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Moon renders correctly', () => {
    const { container } = render(<Moon />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Sun renders correctly', () => {
    const { container } = render(<Sun />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
