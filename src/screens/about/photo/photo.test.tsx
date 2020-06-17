import React from 'react';
import * as Gatsby from 'gatsby';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Photo } from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  portraitImage: {
    childImageSharp: {
      fluid: {
        aspectRatio: 0.66,
        base64: 'data:image/jpeg;base64,XYZ',
        sizes: '(max-width: 800px) 100vw, 800px',
        src: '/static/image.jpg',
        srcSet: '/static/image.jpg 200w, /static/image.jpg 400w',
      },
    },
  },
}));

describe('About', () => {
  describe('Photo', () => {
    test('renders correctly', () => {
      const { container } = render(<Photo />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Photo />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
