import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Interests } from '.';

const data = {
  headline: 'Interests & Hobbies',
  items: ['Interest 1', 'Interest 2', 'Interest 3'],
};

describe('CV', () => {
  describe('Interests', () => {
    test('renders correctly', () => {
      const { container } = render(<Interests data={data} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Interests data={data} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
