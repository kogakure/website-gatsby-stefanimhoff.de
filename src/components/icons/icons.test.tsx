import React from 'react';

import { render } from '../../services/test-utils';

import {
  ArrowLeft,
  ArrowLeftS,
  ArrowRight,
  ArrowRightS,
  ArrowUp,
  Circle,
  Download,
  Information,
  Lock,
} from '.';

describe('Icon', () => {
  test('ArrowUp renders correctly', () => {
    const { container } = render(<ArrowUp />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('ArrowLeft renders correctly', () => {
    const { container } = render(<ArrowLeft />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('ArrowLeftS renders correctly', () => {
    const { container } = render(<ArrowLeftS />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('ArrowRight renders correctly', () => {
    const { container } = render(<ArrowRight />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('ArrowRightS renders correctly', () => {
    const { container } = render(<ArrowRightS />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Circle renders correctly', () => {
    const { container } = render(<Circle />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Download renders correctly', () => {
    const { container } = render(<Download />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Information renders correctly', () => {
    const { container } = render(<Information />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Lock renders correctly', () => {
    const { container } = render(<Lock />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
