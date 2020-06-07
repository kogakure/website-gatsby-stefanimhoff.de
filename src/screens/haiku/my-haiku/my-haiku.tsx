import * as React from 'react';

import { useHaikuQuery } from '../../../hooks';
import { Paragraph, Headline } from '../../../components/typography';

import { Styled } from './my-haiku.styles';

export const MyHaiku: React.FC = () => {
  const {
    allHaikuYaml: { nodes },
  } = useHaikuQuery();

  return (
    <Styled.MyHaiku>
      <Headline>My Haiku</Headline>
      <Paragraph>
        These links lead you to some of my own haiku that I have written over
        the years:
      </Paragraph>
      <Styled.List>
        {nodes.map(({ id }) => (
          <Styled.ListItem key={id}>
            <Styled.LinkedListItem to={`/haiku/${id}/`}>
              {id}
            </Styled.LinkedListItem>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.MyHaiku>
  );
};
