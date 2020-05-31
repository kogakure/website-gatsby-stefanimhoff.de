import * as React from 'react';

import { IconLink, TextLinkWithIconProps } from '../icon-link';
import { ArrowRight } from '../icons';

export type MoreLinkProps = Omit<TextLinkWithIconProps, 'icon'>;

export const MoreLink: React.FC<MoreLinkProps> = ({
  children = 'More',
  ...props
}) => (
  <IconLink icon={<ArrowRight />} {...props}>
    {children}
  </IconLink>
);
