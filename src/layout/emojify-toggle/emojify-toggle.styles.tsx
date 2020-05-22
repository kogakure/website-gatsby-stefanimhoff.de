import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 40px;
  position: relative;
  width: 40px;
`;

export const Emoji = styled.span`
  font-size: 1.5rem;
  left: 6px;
  position: absolute;
  top: 6px;
`;

export const Styled = {
  Button,
  Emoji,
};
