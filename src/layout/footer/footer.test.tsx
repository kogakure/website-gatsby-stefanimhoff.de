import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Footer } from '.';

describe('Footer', () => {
  test('renders correctly', () => {
    const { container } = render(<Footer />);
    const mockDate = new Date(1590275951821);
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => String(mockDate));

    expect(container.firstChild).toMatchSnapshot();

    spy.mockRestore();
  });

  test('is accessible', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
