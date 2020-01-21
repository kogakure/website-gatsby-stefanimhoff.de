import * as React from 'react';

import { Styled } from './Spoiler.styles';

interface SpoilerProps {
  block?: boolean;
}

const Spoiler: React.FC<SpoilerProps> = ({ children, block }) => {
  const [spoiler, setSpoiler] = React.useState(true);

  return (
    <span
      aria-label="Spoiler"
      onClick={() => setSpoiler(false)}
      onKeyUp={e => e.key === 'Enter' && setSpoiler(false)}
      role="button"
      tabIndex={spoiler ? 0 : undefined}
    >
      <Styled.Spoiler block={block} spoiler={spoiler} aria-hidden={spoiler}>
        {children}
      </Styled.Spoiler>
    </span>
  );
};

export { Spoiler };
