import React from 'react';
import { Link } from 'gatsby';

import { Headline, P } from '../components/Typography';
import { Layout } from '../global/Layout';

const SecondPage = () => (
  <Layout>
    <Headline as="h1">Hi from the second page</Headline>
    <P>Welcome to page 2</P>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
