import React from 'react';

import { LocalizedDate } from '.';

const date = '2020-01-17T18:00:00';

export default {
  component: LocalizedDate,
  title: 'Helpers/Localized Date',
};

export const Default = () => <LocalizedDate date={date} />;
