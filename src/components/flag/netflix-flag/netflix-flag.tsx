import * as React from 'react';

import { Styled } from './netflix-flag.styles';

export type NetflixFlagProps = {
  id: string;
};

export const NetflixFlag = ({ id, ...props }: NetflixFlagProps) => (
  <Styled.NetflixFlag
    aria-label="Netflix"
    href={`https://www.netflix.com/title/${id}`}
    label="N"
    title="Netflix"
    {...props}
  />
);
