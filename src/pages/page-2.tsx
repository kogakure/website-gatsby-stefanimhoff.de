import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const SecondPage = () => (
  <Layout>
    <SEO title="Page 2" pathname="/page-2/" />
    <Link to="/">Go back to the homepage</Link>
    <p>Page in JSX</p>
  </Layout>
);

export default SecondPage;
