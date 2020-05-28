import { graphql, useStaticQuery } from 'gatsby';

import { LayoutQueryData } from '../typings/graphql';

export const useLayoutQuery = () => {
  const { allNavigationYaml }: LayoutQueryData = useStaticQuery(graphql`
    query LayoutQuery {
      allNavigationYaml {
        nodes {
          text
          url
        }
      }
    }
  `);

  return { allNavigationYaml };
};
