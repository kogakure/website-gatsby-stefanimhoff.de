import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Meta } from '.';

const data = {
  date: '2019-10-16T18:00:00',
  readingTime: '2 min read',
};

describe('Journal Detail', () => {
  describe('Meta', () => {
    test('renders correctly', () => {
      const { container } = render(<Meta {...data} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Meta {...data} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
