import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Education } from '.';

const data = {
  headline: 'Education',
  items: [
    {
      degree: 'Computer Scientist',
      duration: '10/1999-09/2001',
      location: 'Hanover, Germany',
      school: 'bib International College',
      url: 'https://www.bib.de',
    },
  ],
};

describe('CV', () => {
  describe('Education', () => {
    test('renders correctly', () => {
      const { container } = render(<Education data={data} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Education data={data} />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
