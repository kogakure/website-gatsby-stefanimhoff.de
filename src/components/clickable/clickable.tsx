import * as React from 'react';

import { Styled } from './clickable.styles';

type ClickableProps = {
  text: string;
  onClick?: () => void;
};

export const Clickable: React.FC<ClickableProps> = ({
  children,
  text,
  onClick,
  ...props
}) => (
  <Styled.Button aria-label={text} type="button" onClick={onClick} {...props}>
    {children}
  </Styled.Button>
);
