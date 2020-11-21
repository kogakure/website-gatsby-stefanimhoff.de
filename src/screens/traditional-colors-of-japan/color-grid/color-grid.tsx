import * as React from 'react';

import { useJapaneseColorQuery } from '../../../hooks';
import { ColorSwatch } from '../../../components/color-swatch';

import { Styled } from './color-grid.styles';

export const ColorGrid = () => {
  const {
    allJapaneseColorYaml: { nodes },
  } = useJapaneseColorQuery();

  return (
    <Styled.ColorGrid>
      {nodes.map(({ id, color, description, name }) => (
        <ColorSwatch
          color={color}
          description={description}
          key={id}
          name={name}
          data-sal="slide-up"
          data-sal-duration="800"
        />
      ))}
    </Styled.ColorGrid>
  );
};
