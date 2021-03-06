import * as React from 'react';
import Color from 'color';

import { Styled } from './color-swatch.styles';

export type ColorSwatchProps = {
  color: string;
  description?: string;
  name?: string;
};

export const ColorSwatch = ({
  color,
  description,
  name,
  ...props
}: ColorSwatchProps) => {
  const showToggle = name || description;
  const [toggle, setToggle] = React.useState(!showToggle);
  const colorObj = Color(color);
  const hex = colorObj.hex().toString();
  const { r, g, b } = colorObj.rgb().object();
  const { h, s, l } = colorObj.hsl().object();

  return (
    <Styled.ColorSwatchContainer {...props}>
      <Styled.Color style={{ backgroundColor: hex }} />
      <Styled.Information>
        {showToggle && (
          <Styled.Toggle
            aria-label="Information"
            onClick={() => setToggle(!toggle)}
            onKeyUp={(e) => e.key === 'Enter' && setToggle(!toggle)}
            role="button"
            tabIndex={0}
          >
            <Styled.Icon role="img" aria-label="Information Icon" />
          </Styled.Toggle>
        )}
        {toggle ? (
          <Styled.ColorInformation>
            <Styled.ColorValue>
              <strong>R</strong>
              {' '}
              {Number(r).toFixed(0)}&nbsp;
              <strong>G</strong>
              {' '}
              {Number(g).toFixed(0)}&nbsp;
              <strong>B</strong>
              {' '}
              {Number(b).toFixed(0)}&nbsp;
            </Styled.ColorValue>
            <Styled.ColorValue>
              <strong>H</strong>
              {' '}
              {Number(h).toFixed(0)}&nbsp;
              <strong>S</strong>
              {' '}
              {Number(s).toFixed(0)}&nbsp;
              <strong>L</strong>
              {' '}
              {Number(l).toFixed(0)}&nbsp;
            </Styled.ColorValue>
            <Styled.ColorValue>
              <strong>{hex}</strong>
            </Styled.ColorValue>
          </Styled.ColorInformation>
        ) : (
          <>
            <Styled.Name>{name}</Styled.Name>
            <Styled.Description>{description}</Styled.Description>
          </>
        )}
      </Styled.Information>
    </Styled.ColorSwatchContainer>
  );
};
