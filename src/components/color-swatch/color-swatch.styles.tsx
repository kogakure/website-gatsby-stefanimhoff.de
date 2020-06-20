import styled from 'styled-components';

import { Information as InformationIcon } from '../icons';
import { borderStyle, borderWidth, radius, shadow } from '../../layout/tokens';

const ColorSwatchContainer = styled.div`
  border-color: var(--colorForegroundSoft);
  border-radius: ${radius[2]};
  border-style: ${borderStyle.solid};
  border-width: ${borderWidth[1]};
  box-shadow: ${shadow.subtleShade};
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  transition-duration: 500ms;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  width: 100%;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

const Color = styled.div`
  background: lightgrey;
  border-bottom-color: var(--colorForegroundSoft);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-top-left-radius: ${radius[2]};
  border-top-right-radius: ${radius[2]};
  min-height: 6rem;
`;

const Toggle = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
`;

const Icon = styled(InformationIcon)`
  fill: var(--colorForegroundFullContrast);
  font-size: 1rem;
`;

const Information = styled.div`
  background: var(--colorBackgroundFullContrast);
  border-bottom-left-radius: ${radius[2]};
  border-bottom-right-radius: ${radius[2]};
  color: var(--colorForegroundFullContrast);
  height: 100%;
  min-height: 8rem;
  padding: 0.8rem 0.6rem;
  position: relative;
`;

const ColorInformation = styled.div`
  font-size: 0.8rem;
`;

const ColorValue = styled.div`
  padding-bottom: 0.1rem;
  padding-top: 0.1rem;
`;

const Name = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1;
  padding-bottom: 0.3rem;
  padding-right: 20px;
`;

const Description = styled.div`
  margin-bottom: 0.5rem;
  padding-right: 20px;
`;

export const Styled = {
  Color,
  ColorInformation,
  ColorSwatchContainer,
  ColorValue,
  Description,
  Information,
  Icon,
  Name,
  Toggle,
};
