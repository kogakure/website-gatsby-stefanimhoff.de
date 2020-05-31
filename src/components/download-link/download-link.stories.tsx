import React from 'react';

import { DownloadLink } from '.';

export default {
  component: DownloadLink,
  title: 'Text Styles/Download Link',
};

export const Default = () => <DownloadLink to="/" />;

export const CustomText = () => (
  <DownloadLink to="/">Download Now!</DownloadLink>
);
