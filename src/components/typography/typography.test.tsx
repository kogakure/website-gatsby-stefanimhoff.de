import React from 'react';

import { render } from '../../services/test-utils';

import {
  Default as Title,
  NoMargin as TitleNoMargin,
} from './stories/title.stories';
import {
  Default as Headline,
  NoMargin as HeadlineNoMargin,
} from './stories/headline.stories';
import {
  Default as Subheadline,
  NoMargin as SubheadlineNoMargin,
} from './stories/subheadline.stories';
import {
  Default as SubSubheadline,
  NoMargin as SubSubheadlineNoMargin,
} from './stories/sub-subheadline.stories';
import {
  Default as Paragraph,
  NoMargin as ParagraphNoMargin,
} from './stories/paragraph.stories';

describe('Typography', () => {
  describe('Title', () => {
    test('renders correctly', () => {
      const { container } = render(<Title />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "noMargin" renders correctly', () => {
      const { container } = render(<TitleNoMargin />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Headline', () => {
    test('renders correctly', () => {
      const { container } = render(<Headline />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "noMargin" renders correctly', () => {
      const { container } = render(<HeadlineNoMargin />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Subheadline', () => {
    test('renders correctly', () => {
      const { container } = render(<Subheadline />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "noMargin" renders correctly', () => {
      const { container } = render(<SubheadlineNoMargin />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('SubSubheadline', () => {
    test('renders correctly', () => {
      const { container } = render(<SubSubheadline />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "noMargin" renders correctly', () => {
      const { container } = render(<SubSubheadlineNoMargin />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Paragraph', () => {
    test('renders correctly', () => {
      const { container } = render(<Paragraph />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('with "noMargin" renders correctly', () => {
      const { container } = render(<ParagraphNoMargin />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
