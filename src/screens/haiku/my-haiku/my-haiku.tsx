import * as React from 'react';

import { Paragraph, Headline } from '../../../components/typography';

import { Styled } from './my-haiku.styles';

export const MyHaiku: React.FC = () => (
  <Styled.MyHaiku>
    <Headline>My Haiku</Headline>
    <Paragraph>
      These links lead you to some of my own haiku that I have written over the
      years:
    </Paragraph>
    <Styled.List>
      <Styled.ListItem>
        <Styled.LinkedListItem to="/">1</Styled.LinkedListItem>
      </Styled.ListItem>
    </Styled.List>
  </Styled.MyHaiku>
);
