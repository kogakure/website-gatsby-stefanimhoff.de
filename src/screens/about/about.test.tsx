import React from 'react';
import * as Gatsby from 'gatsby';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import {
  TitleAbout,
  PhotoContainer,
  SectionAbout,
  SectionAboutWebsite,
  PortraitPhoto,
} from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  placeholderImage: {
    childImageSharp: {
      fluid: {
        aspectRatio: 0.66,
        base64: 'data:image/jpeg;base64,XYZ',
        sizes: '(max-width: 800px) 100vw, 800px',
        src: '/static/image.jpg',
        srcSet: `/static/image.jpg 200w,
                 /static/image.jpg 400w,
                 /static/image.jpg 800w,
                 /static/image.jpg 1200w,
                 /static/image.jpg 1600w,
                 /static/image.jpg 2000w`,
      },
    },
  },
}));

describe('About', () => {
  describe('TitleAbout', () => {
    test('renders correctly', () => {
      const { container } = render(<TitleAbout>About</TitleAbout>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<TitleAbout>About</TitleAbout>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });

  describe('PhotoContainer', () => {
    test('renders correctly', () => {
      const { container } = render(<PhotoContainer>Photo</PhotoContainer>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<PhotoContainer>Photo</PhotoContainer>);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });

    describe('SectionAbout', () => {
      test('renders correctly', () => {
        const { container } = render(<SectionAbout>About</SectionAbout>);

        expect(container.firstChild).toMatchSnapshot();
      });

      test('is accessible', async () => {
        const { container } = render(<SectionAbout>About</SectionAbout>);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
      });
    });

    describe('SectionAboutWebsite', () => {
      test('renders correctly', () => {
        const { container } = render(
          <SectionAboutWebsite>About Website</SectionAboutWebsite>
        );

        expect(container.firstChild).toMatchSnapshot();
      });

      test('is accessible', async () => {
        const { container } = render(
          <SectionAboutWebsite>About Website</SectionAboutWebsite>
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
      });
    });
  });

  test('renders correctly', () => {
    const { container } = render(<PortraitPhoto />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
