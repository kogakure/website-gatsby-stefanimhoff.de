import React from 'react';

import { ProtectedEmail } from '.';

export default {
  component: ProtectedEmail,
  title: 'Helpers/ProtectedEmail',
};

export const Default = () => <ProtectedEmail />;

export const CustomTitle = () => <ProtectedEmail title="Email me today!" />;

export const NoKeyDownload = () => <ProtectedEmail noKeyDownload />;
