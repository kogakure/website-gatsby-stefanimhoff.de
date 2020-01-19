import styled from 'styled-components';

import { Information as InformationIcon } from '../Icons';

const ColorSwatchContainer = styled.div`
  border: 1px solid var(--colorBorder);
  border-radius: 5px;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 0.7rem;
  max-width: 12rem;
`;

const Color = styled.div`
  background: lightgrey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 6rem;
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
  font-size: 1rem;
`;

const Information = styled.div`
  background: var(--colorBackgroundFull);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: var(--colorTextFull);
  min-height: 6rem;
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
