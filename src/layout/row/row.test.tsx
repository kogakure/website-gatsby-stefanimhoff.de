import React from 'react';

import { render } from '../../services/test-utils';

import {
  BigLeft,
  BigRight,
  Center,
  Default,
  End,
  Fullsize,
  LeftDown,
  LeftOnly,
  Middle,
  RightDown,
  RightOnly,
  Start,
  VariableEnd,
  VariableMiddle,
  VariableStart,
} from './row.stories';

describe('Row', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "center" renders correctly', () => {
    const { container } = render(<Center />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "fullSize" renders correctly', () => {
    const { container } = render(<Fullsize />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "rightOnly" renders correctly', () => {
    const { container } = render(<RightOnly />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "leftOnly" renders correctly', () => {
    const { container } = render(<LeftOnly />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "bigRight" renders correctly', () => {
    const { container } = render(<BigRight />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "bigLeft" renders correctly', () => {
    const { container } = render(<BigLeft />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "start" renders correctly', () => {
    const { container } = render(<Start />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "middle" renders correctly', () => {
    const { container } = render(<Middle />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "end" renders correctly', () => {
    const { container } = render(<End />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "rightDown" renders correctly', () => {
    const { container } = render(<RightDown />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with "leftDown" renders correctly', () => {
    const { container } = render(<LeftDown />);

    expect(container.firstChild).toMatchSnapshot();
  });
  test('with "variableStart" renders correctly', () => {
    const { container } = render(<VariableStart />);

    expect(container.firstChild).toMatchSnapshot();
  });
  test('with "variableMiddle" renders correctly', () => {
    const { container } = render(<VariableMiddle />);

    expect(container.firstChild).toMatchSnapshot();
  });
  test('with "variableEnd" renders correctly', () => {
    const { container } = render(<VariableEnd />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
