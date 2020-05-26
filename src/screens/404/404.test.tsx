import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Title404, Huge404, Haiku } from './404.styles';

describe('404', () => {
  describe('Title404', () => {
    test('renders correctly', () => {
      const { container } = render(<Title404>404</Title404>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Title404>404</Title404>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('Haiku', () => {
    test('renders correctly', () => {
      const { container } = render(<Haiku>Haiku</Haiku>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Haiku>Haiku</Haiku>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('Huge404', () => {
    test('renders correctly', () => {
      const { container } = render(<Huge404>404</Huge404>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Huge404>404</Huge404>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
