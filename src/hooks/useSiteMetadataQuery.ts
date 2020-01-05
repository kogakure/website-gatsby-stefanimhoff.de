import { graphql, useStaticQuery } from 'gatsby';

import { SiteMetadataQueryData } from '../typings/SiteMetadataQueryData';

export const useSiteMetadataQuery = () => {
  const { site }: SiteMetadataQueryData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          description
          feedUrl
          image
          language
          siteUrl
          siteUrl
          title
          titleTemplate
          twitterUsername
        }
      }
    }
  `);

  return { site };
};
