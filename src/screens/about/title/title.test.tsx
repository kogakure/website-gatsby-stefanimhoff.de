import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Title } from '.';

describe('About', () => {
  describe('Title', () => {
    test('renders correctly', () => {
      const { container } = render(<Title>Title</Title>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Title>Title</Title>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
