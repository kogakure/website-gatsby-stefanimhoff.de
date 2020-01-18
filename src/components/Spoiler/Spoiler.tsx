import * as React from 'react';

import { Styled } from './Spoiler.styles';

interface SpoilerProps {
  layout?: 'block';
}

const Spoiler: React.FC<SpoilerProps> = ({ children, layout }) => {
  const [spoiler, setSpoiler] = React.useState(true);

  return (
    <span
      role="button"
      aria-label="Spoiler"
      tabIndex={0}
      onClick={() => setSpoiler(false)}
      onKeyUp={e => e.key === 'Enter' && setSpoiler(false)}
    >
      <Styled.Spoiler layout={layout} spoiler={spoiler} aria-hidden={spoiler}>
        {children}
      </Styled.Spoiler>
    </span>
  );
};

export { Spoiler };
