import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Flag } from '.';

describe('Flag', () => {
  test('renders correctly', () => {
    const { container } = render(<Flag label="label" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Flag label="label" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('with href', () => {
    test('renders correctly', () => {
      const { container } = render(<Flag label="label" href="/" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Flag label="label" href="/" />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
