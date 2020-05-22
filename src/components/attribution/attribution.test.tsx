import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import {
  Default,
  TitleAuthor,
  Multiple,
  Author,
  AuthorLink,
} from './attribution.stories';

jest.mock('../../services/generate-key.ts');

describe('Attribution', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with title and author renders correctly', () => {
    const { container } = render(<TitleAuthor />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with multiple attributions renders correctly', () => {
    const { container } = render(<Multiple />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with author renders correctly', () => {
    const { container } = render(<Author />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with author and link renders correctly', () => {
    const { container } = render(<AuthorLink />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
