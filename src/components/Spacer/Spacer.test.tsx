import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import {
  Bottom,
  BottomShortcut,
  Default,
  Left,
  LeftRight,
  LeftShortcut,
  Right,
  RightShortcut,
  Shortcut,
  Top,
  TopBottom,
  TopShortcut,
} from './Spacer.stories';

describe('Spacer', () => {
  test('has padding', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has padding with shortcut', () => {
    const { container } = render(<Shortcut />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has top padding', () => {
    const { container } = render(<Top />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has bottom padding', () => {
    const { container } = render(<Bottom />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has right padding', () => {
    const { container } = render(<Right />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has left padding', () => {
    const { container } = render(<Left />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has top padding with shortcut', () => {
    const { container } = render(<TopShortcut />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has bottom padding with shortcut', () => {
    const { container } = render(<BottomShortcut />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has right padding with shortcut', () => {
    const { container } = render(<RightShortcut />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has left padding with shortcut', () => {
    const { container } = render(<LeftShortcut />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has left/right padding with shortcut', () => {
    const { container } = render(<LeftRight />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('has top/bottom padding with shortcut', () => {
    const { container } = render(<TopBottom />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
