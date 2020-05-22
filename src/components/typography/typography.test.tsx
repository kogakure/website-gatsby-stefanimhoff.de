import React from 'react';

import { render } from '../../services/test-utils';

import { Default as Title } from './stories/title.stories';
import { Default as Headline } from './stories/headline.stories';
import { Default as Subline } from './stories/subline.stories';
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

  describe('Subline', () => {
    test('renders correctly', () => {
      const { container } = render(<Subline />);

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
