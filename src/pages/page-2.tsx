import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../layout';

const SecondPage = () => (
  <Layout variant="green">
    <SEO title="Page 2" pathname="/page-2/" />
    <Link to="/">Go back to the homepage</Link>
    <p>Page in JSX</p>
  </Layout>
);

export default SecondPage;
