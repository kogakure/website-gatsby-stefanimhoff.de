import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../global/Layout';

const SecondPage = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <p>Page in JSX</p>
  </Layout>
);

export default SecondPage;
