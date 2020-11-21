import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import type { TableProps } from './table';

import { Table } from '.';

export default {
  title: 'Misc/Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <thead>
        <tr>
          <th>Table Header</th>
          <th>Table Header</th>
          <th>Table Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table Cell</td>
          <td>Table Cell</td>
          <td>Table Cell</td>
        </tr>
        <tr>
          <td>Table Cell</td>
          <td>Table Cell</td>
          <td>Table Cell</td>
        </tr>
        <tr>
          <td>Table Cell</td>
          <td>Table Cell</td>
          <td>Table Cell</td>
        </tr>
      </tbody>
    </>
  ),
};
