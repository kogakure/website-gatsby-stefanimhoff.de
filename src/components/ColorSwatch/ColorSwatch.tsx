import * as React from 'react';
import * as CSS from 'csstype';
import Color from 'color';

import { Styled } from './ColorSwatch.styles';

interface ColorSwatchProps {
  color: CSS.ColorProperty;
  description?: string;
  name?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  color,
  description,
  name,
  ...props
}) => {
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

export { ColorSwatch };
