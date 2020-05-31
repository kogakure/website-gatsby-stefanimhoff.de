import * as React from 'react';

import { IconLink, TextLinkWithIconProps } from '../icon-link';
import { Download } from '../icons';

export type DownloadLinkProps = Omit<TextLinkWithIconProps, 'icon'>;

export const DownloadLink: React.FC<DownloadLinkProps> = ({
  children = 'Download',
  ...props
}) => (
  <IconLink animation="down" icon={<Download />} {...props}>
    {children}
  </IconLink>
);
