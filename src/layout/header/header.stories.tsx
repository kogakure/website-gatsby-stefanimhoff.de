import React from 'react';

import { navigation } from '../navigation/mock-data';

import { Header } from '.';

export default {
  component: Header,
  title: 'Layout/Header',
};

export const Default = () => <Header navigation={navigation} />;
