import React from 'react';

import { Table } from '.';

export default {
  component: Table,
  title: 'Misc/Table',
};

export const Default = () => (
  <Table>
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
  </Table>
);
