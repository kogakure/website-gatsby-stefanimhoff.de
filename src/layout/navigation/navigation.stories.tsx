import React from 'react';

import { navigation } from './mock-data';

import { Navigation } from '.';

export default {
  component: Navigation,
  title: 'Layout/Navigation',
};

export const Default = () => <Navigation navigation={navigation} />;
