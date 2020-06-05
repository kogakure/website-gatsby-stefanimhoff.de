import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Summary } from '.';

const data = {
  headline: 'Professional Summary',
  text: 'Summary Text',
};

describe('CV', () => {
  describe('Summary', () => {
    test('renders correctly', () => {
      const { container } = render(<Summary data={data} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Summary data={data} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
