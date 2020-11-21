import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Table } from '.';

describe('Table', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Table>
        <thead>
          <tr>
            <th>Table Header</th>
          </tr>
        </thead>
      </Table>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(
      <Table>
        <thead>
          <tr>
            <th>Table Header</th>
          </tr>
        </thead>
      </Table>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
