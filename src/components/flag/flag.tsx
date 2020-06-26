import * as React from 'react';

import { Styled } from './flag.styles';

export type FlagProps = {
  href?: string;
  label: string;
  title?: string;
};

export const Flag: React.FC<FlagProps> = ({ href, label, title, ...props }) => (
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
