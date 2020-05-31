import React from 'react';
import * as Gatsby from 'gatsby';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { ColorGrid } from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  allJapaneseColorYaml: {
    nodes: [
      {
        id: '1',
        name: 'Pink',
        description: 'The vivid pink of Dianthus chinesis flowers.',
        color: '#DC9FB4',
      },
    ],
  },
}));

describe('Traditional Colors of Japan', () => {
  describe('ColorGrid', () => {
    test('renders correctly', () => {
      const { container } = render(<ColorGrid />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<ColorGrid />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
