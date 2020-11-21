import React from 'react';

import { render } from '../../services/test-utils';

import { Headline, Paragraph, SubSubheadline, Subheadline, Title } from '.';

describe('Typography', () => {
  describe('Title', () => {
    test('renders correctly', () => {
      const { container } = render(<Title>Title</Title>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "noMargin" renders correctly', () => {
      const { container } = render(<Title noMargin>Title</Title>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Headline', () => {
    test('renders correctly', () => {
      const { container } = render(<Headline>Headline</Headline>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "noMargin" renders correctly', () => {
      const { container } = render(<Headline noMargin>Headline</Headline>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Subheadline', () => {
    test('renders correctly', () => {
      const { container } = render(<Subheadline>Subheadline</Subheadline>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "noMargin" renders correctly', () => {
      const { container } = render(
        <Subheadline noMargin>Subheadline</Subheadline>
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('SubSubheadline', () => {
    test('renders correctly', () => {
      const { container } = render(
        <SubSubheadline>SubSubheadline</SubSubheadline>
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "noMargin" renders correctly', () => {
      const { container } = render(
        <SubSubheadline noMargin>SubSubheadline</SubSubheadline>
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Paragraph', () => {
    test('renders correctly', () => {
      const { container } = render(<Paragraph>Paragraph</Paragraph>);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "noMargin" renders correctly', () => {
      const { container } = render(<Paragraph noMargin>Paragraph</Paragraph>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
