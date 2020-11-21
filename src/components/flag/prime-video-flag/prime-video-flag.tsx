import * as React from 'react';

import { Styled } from './prime-video-flag.styles';

export type PrimeVideoFlagProps = {
  id: string;
};

export const PrimeVideoFlag = ({ id, ...props }: PrimeVideoFlagProps) => (
  <Styled.PrimeVideoFlag
    aria-label="Prime Video"
    href={`https://www.amazon.de/gp/video/detail/${id}`}
    label="P"
    title="Prime Video"
    {...props}
  />
);
