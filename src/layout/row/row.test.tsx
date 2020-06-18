import React from 'react';

import { render } from '../../services/test-utils';

import {
  BigLeft,
  BigRight,
  Center,
  Default,
  Equal,
  EqualCenter,
  EqualEnd,
  EqualStart,
  Fullsize,
  LeftDown,
  LeftOnly,
  RightDown,
  RightOnly,
  Variable,
  VariableCenter,
  VariableEnd,
  VariableStart,
} from './row.stories';

describe('Row', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('centered', () => {
    test('renders correctly', () => {
      const { container } = render(<Center />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('fullsize', () => {
    test('renders correctly', () => {
      const { container } = render(<Fullsize />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('only one item', () => {
    test('right renders correctly', () => {
      const { container } = render(<RightOnly />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('left renders correctly', () => {
      const { container } = render(<LeftOnly />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with big item', () => {
    test('right renders correctly', () => {
      const { container } = render(<BigRight />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('left renders correctly', () => {
      const { container } = render(<BigLeft />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with two equal sized items', () => {
    test('renders correctly', () => {
      const { container } = render(<Equal />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to start renders correctly', () => {
      const { container } = render(<EqualStart />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to center renders correctly', () => {
      const { container } = render(<EqualCenter />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to end renders correctly', () => {
      const { container } = render(<EqualEnd />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with one item down', () => {
    test('right renders correctly', () => {
      const { container } = render(<RightDown />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('left renders correctly', () => {
      const { container } = render(<LeftDown />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with variable amount of items', () => {
    test('renders correctly', () => {
      const { container } = render(<Variable />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to start renders correctly', () => {
      const { container } = render(<VariableStart />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to center renders correctly', () => {
      const { container } = render(<VariableCenter />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to end renders correctly', () => {
      const { container } = render(<VariableEnd />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
