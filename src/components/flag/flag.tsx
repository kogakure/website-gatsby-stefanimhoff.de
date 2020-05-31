import * as React from 'react';

import { Styled, variants } from './flag.styles';

export type FlagVariant = keyof typeof variants;
export type FlagProps = {
  variant?: FlagVariant;
  label?: string;
  id?: string;
  href?: string;
};

export const Flag: React.FC<FlagProps> = ({
  href,
  id,
  label,
  variant = 'default',
  ...props
}) => {
  let text;
  let url;
  let longText;

  switch (variant) {
    case 'netflix':
      text = 'N';
      longText = 'Netflix';
      url = `https://www.netflix.com/title/${id}`;
      break;
    case 'primevideo':
      text = 'P';
      longText = 'Prime Video';
      url = `https://www.amazon.de/gp/video/detail/${id}`;
      break;
    default:
      text = label;
      longText = label;
      url = href;
  }

  return (
    <>
      {id || href ? (
        <Styled.LinkedFlag
          href={url}
          rel="nofollow noopener noreferrer external"
          variant={variant}
          aria-label={longText}
          {...props}
        >
          {text}
        </Styled.LinkedFlag>
      ) : (
        <Styled.Flag variant={variant} aria-label={longText} {...props}>
          {text}
        </Styled.Flag>
      )}
    </>
  );
};
