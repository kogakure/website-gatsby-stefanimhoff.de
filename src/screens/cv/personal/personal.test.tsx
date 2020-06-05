import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Personal } from '.';

const data = {
  name: 'Stefan Imhoff',
  tagline: 'Front-End Web Developer & UX/UI Designer',
};

describe('CV', () => {
  describe('Personal', () => {
    test('renders correctly', () => {
      const { container } = render(<Personal data={data} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Personal data={data} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
