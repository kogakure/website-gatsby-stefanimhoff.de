import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { Title, Headline, Subline, Paragraph } from '.';

describe('Typography', () => {
  describe('Title', () => {
    test('renders correctly', () => {
      const { container } = render(<Title>Title</Title>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Headline', () => {
    test('renders correctly', () => {
      const { container } = render(<Headline>Headline</Headline>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Subline', () => {
    test('renders correctly', () => {
      const { container } = render(<Subline>Subline</Subline>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Paragraph', () => {
    test('renders correctly', () => {
      const { container } = render(<Paragraph>Paragraph</Paragraph>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
