import { graphql, useStaticQuery } from 'gatsby';

import { LayoutQueryData } from '../interfaces/LayoutQuery';

export const useLayoutQuery = () => {
  const { site }: LayoutQueryData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return { site };
};
