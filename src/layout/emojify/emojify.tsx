import * as React from 'react';

import { EmojifyContext } from '../../contexts';

import { Styled } from './emojify.styles';

export type EmojifyProps = {
  emoji: string;
};

export const Emojify: React.FC<EmojifyProps> = ({ emoji, ...props }) => {
  const { emojified } = React.useContext(EmojifyContext);

  return emojified ? (
    <Styled.Emoji role="img" aria-hidden="true" {...props}>
      {' '}
      {emoji}{' '}
    </Styled.Emoji>
  ) : (
    <span> </span>
  );
};
