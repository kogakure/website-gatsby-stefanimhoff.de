import React, { SVGProps } from 'react';

const SvgCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={12} r={9.967} />
  </svg>
);

export default SvgCircle;
