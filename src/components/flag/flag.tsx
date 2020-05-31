import * as React from 'react';

import { Styled } from './flag.styles';

export type FlagProps = {
  label: string;
  href?: string;
};

export const Flag: React.FC<FlagProps> = ({ href, label, ...props }) => (
  <>
    {href ? (
      <Styled.LinkedFlag
        href={href}
        rel="nofollow noopener noreferrer external"
        {...props}
      >
        {label}
      </Styled.LinkedFlag>
    ) : (
      <Styled.Flag {...props}>{label}</Styled.Flag>
    )}
  </>
);
