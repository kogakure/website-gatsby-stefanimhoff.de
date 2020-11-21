import * as React from 'react';

import { IconLink } from '../icon-link';
import type { IconLinkProps } from '../icon-link';
import { Download } from '../icons';

export type DownloadLinkProps = Omit<IconLinkProps, 'icon'>;

export const DownloadLink = ({
  children = 'Download',
  ...props
}: DownloadLinkProps) => (
  <IconLink animation="down" icon={<Download />} {...props}>
    {children}
  </IconLink>
);
