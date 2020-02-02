import React from 'react';

import { render } from '../../utils/test-utils';

import { Typography } from '.';

const { Title, Headline, Subline, Paragraph } = Typography;

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
