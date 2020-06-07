import React from 'react';
import { axe } from 'jest-axe';
import * as Gatsby from 'gatsby';

import { render } from '../../../services/test-utils';

import { MyHaiku } from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  allHaikuYaml: {
    nodes: [
      { id: '1', de: 'German Haiku 1', en: 'English Haiku 1' },
      { id: '2', de: 'German Haiku 2', en: 'English Haiku 2' },
    ],
  },
}));

describe('Haiku', () => {
  describe('MyHaiku', () => {
    test('renders correctly', () => {
      const { container } = render(<MyHaiku />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<MyHaiku />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
