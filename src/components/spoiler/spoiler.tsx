import * as React from 'react';

import { Styled } from './spoiler.styles';

export type SpoilerProps = {
  children: React.ReactNode;
  block?: boolean;
};

export const Spoiler = ({ children, block, ...props }: SpoilerProps) => {
  const [spoiler, setSpoiler] = React.useState(true);

  return (
    <>
      <Styled.Hidden aria-hidden="true">SPOILER: </Styled.Hidden>
      <span
        aria-label="Spoiler"
        onClick={() => setSpoiler(false)}
        onKeyUp={(e) => e.key === 'Enter' && setSpoiler(false)}
        role="button"
        tabIndex={spoiler ? 0 : undefined}
      >
        <Styled.Spoiler
          aria-hidden={spoiler}
          block={block}
          spoiler={spoiler}
          {...props}
        >
          {children}
        </Styled.Spoiler>
      </span>
      <Styled.Hidden aria-hidden="true"> SPOILER END</Styled.Hidden>
    </>
  );
};
