import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../global/Layout';
import { Image } from '../components/Image';
import { Headline, P } from '../components/Typography';

const IndexPage = () => (
  <Layout>
    <Headline as="h1">Hello World!</Headline>
    <P>Welcome to your new Gatsby site.</P>
    <P>Now go build something great.</P>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
