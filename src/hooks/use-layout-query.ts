import { graphql, useStaticQuery } from 'gatsby';

import { LayoutQueryData } from '../typings/graphql';

export const useLayoutQuery = () => {
  const { navigationYaml }: LayoutQueryData = useStaticQuery(graphql`
    query LayoutQuery {
      navigationYaml {
        navigation {
          text
          url
        }
      }
    }
  `);

  return { navigationYaml };
};
