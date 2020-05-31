import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Default, Linked } from './flag.stories';

describe('Flag', () => {
  test('renders correctly', () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('with href', () => {
    test('renders correctly', () => {
      const { container } = render(<Linked />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Linked />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
