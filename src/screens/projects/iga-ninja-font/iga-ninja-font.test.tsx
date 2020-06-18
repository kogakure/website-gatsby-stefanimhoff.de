import React from 'react';
import * as Gatsby from 'gatsby';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { IgaNinjaFont } from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  igaNinjaFont: {
    childImageSharp: {
      fluid: {
        aspectRatio: 0.66,
        base64: 'data:image/jpeg;base64,XYZ',
        sizes: '(max-width: 1200px) 100vw, 1200px',
        src: '/static/cover.jpg',
        srcSet: '/static/cover.jpg 200w, /static/cover.jpg 400w',
      },
    },
  },
}));

describe('Projects', () => {
  describe('IgaNinjaFont', () => {
    test('renders correctly', () => {
      const { container } = render(<IgaNinjaFont />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<IgaNinjaFont />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});