import React from 'react';

import { render } from '../../services/test-utils';

import { Row } from '.';

describe('Row', () => {
  test('renders correctly', () => {
    const { container } = render(<Row />);

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('centered', () => {
    test('renders correctly', () => {
      const { container } = render(<Row variant="center" />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('fullsize', () => {
    test('renders correctly', () => {
      const { container } = render(<Row variant="fullsize" />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('only one item', () => {
    test('right renders correctly', () => {
      const { container } = render(<Row variant="rightOnly" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('left renders correctly', () => {
      const { container } = render(<Row variant="leftOnly" />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with big item', () => {
    test('right renders correctly', () => {
      const { container } = render(<Row variant="bigRight" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('left renders correctly', () => {
      const { container } = render(<Row variant="bigLeft" />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with two equal sized items', () => {
    test('renders correctly', () => {
      const { container } = render(<Row variant="equal" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to start renders correctly', () => {
      const { container } = render(<Row variant="equal" vertical="start" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to center renders correctly', () => {
      const { container } = render(<Row variant="equal" vertical="center" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to end renders correctly', () => {
      const { container } = render(<Row variant="equal" vertical="end" />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with one item down', () => {
    test('right renders correctly', () => {
      const { container } = render(<Row variant="rightDown" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('left renders correctly', () => {
      const { container } = render(<Row variant="leftDown" />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with variable amount of items', () => {
    test('renders correctly', () => {
      const { container } = render(<Row variant="variable" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to start renders correctly', () => {
      const { container } = render(<Row variant="variable" vertical="start" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to center renders correctly', () => {
      const { container } = render(
        <Row variant="variable" vertical="center" />
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    test('aligned to end renders correctly', () => {
      const { container } = render(<Row variant="variable" vertical="end" />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
