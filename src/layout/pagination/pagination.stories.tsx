import React from 'react';

import { Pagination, LinkWithPaginationProps } from '.';

export default {
  title: 'Layout/Pagination',
};

const leftProps: LinkWithPaginationProps = {
  text: 'Previous',
  to: '/previous/',
  variant: 'left',
};

const rightProps: LinkWithPaginationProps = {
  text: 'Next',
  to: '/next/',
  variant: 'right',
};

export const Default = () => <Pagination to="/" variant="right" />;

export const Both = () => (
  <>
    <Pagination {...leftProps} />
    <Pagination {...rightProps} />
  </>
);

export const Left = () => <Pagination {...leftProps} />;

export const Right = () => <Pagination {...rightProps} />;
