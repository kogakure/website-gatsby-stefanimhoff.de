import React from 'react';

import { render } from '../../services/test-utils';

import { Default as Title } from './stories/title.stories';
import { Default as Headline } from './stories/headline.stories';
import { Default as Subheadline } from './stories/subheadline.stories';
import { Default as SubSubheadline } from './stories/sub-subheadline.stories';
import { Default as Paragraph } from './stories/paragraph.stories';

describe('Typography', () => {
  describe('Title', () => {
    test('renders correctly', () => {
      const { container } = render(<Title />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Headline', () => {
    test('renders correctly', () => {
      const { container } = render(<Headline />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Subheadline', () => {
    test('renders correctly', () => {
      const { container } = render(<Subheadline />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('SubSubheadline', () => {
    test('renders correctly', () => {
      const { container } = render(<SubSubheadline />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Paragraph', () => {
    test('renders correctly', () => {
      const { container } = render(<Paragraph />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
