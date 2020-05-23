import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { LegalInformation } from './legal-information';

describe('LegalInformation', () => {
  test('renders correctly', () => {
    const { container } = render(<LegalInformation />);
    const mockDate = new Date(1590275951821);
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => String(mockDate));

    expect(container.firstChild).toMatchSnapshot();

    spy.mockRestore();
  });

  test('is accessible', async () => {
    const { container } = render(<LegalInformation />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
