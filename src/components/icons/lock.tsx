import React, { SVGProps } from 'react';

const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 1114 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 007 9v1h10z" />
  </svg>
);

export default SvgLock;
