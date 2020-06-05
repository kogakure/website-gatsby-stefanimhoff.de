import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Experience } from '.';

const data = {
  headline: 'Professional Experience',
  items: [
    {
      company: 'XING',
      duration: '03/2020-current',
      location: 'Hamburg, Germany',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      title: 'Senior Software Engineer',
      url: 'https://www.xing.com',
    },
  ],
};

describe('CV', () => {
  describe('Experience', () => {
    test('renders correctly', () => {
      const { container } = render(<Experience data={data} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Experience data={data} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
