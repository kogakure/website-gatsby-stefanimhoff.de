import React from 'react';

import { Layout } from '../global/Layout';
import { Headline, P } from '../components/Typography';

const NotFoundPage = () => (
  <Layout>
    <Headline as="h1">NOT FOUND</Headline>
    <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
  </Layout>
);

export default NotFoundPage;
