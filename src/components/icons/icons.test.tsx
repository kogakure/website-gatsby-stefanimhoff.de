import React from 'react';

import { render } from '../../utils/test-utils';

import { Icon as ArrowUp } from './arrow-up.stories';
import { Icon as Information } from './information.stories';
import { Icon as Moon } from './moon.stories';
import { Icon as Sun } from './sun.stories';

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
