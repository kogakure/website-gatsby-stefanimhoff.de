import * as React from 'react';

import { IconLink } from '../icon-link';
import type { IconLinkProps } from '../icon-link';
import { ArrowRight } from '../icons';

export type MoreLinkProps = Omit<IconLinkProps, 'icon'>;

export const MoreLink = ({ children = 'More', ...props }: MoreLinkProps) => (
  <IconLink animation="right" icon={<ArrowRight />} {...props}>
    {children}
  </IconLink>
);
